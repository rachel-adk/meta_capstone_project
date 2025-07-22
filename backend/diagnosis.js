require("dotenv").config()
console.log("Connecting to:", process.env.DATABASE_URL)
const { Pool } = require("pg");
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

// Computing Body Mass Index of User to help with diagnosis
function computeBMI(weight, height) {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}

// Grouping bmi into categories based on values
function groupBMI(bmi) {
  if (bmi < 18.5) {
    return "underweight";
  }
  if (bmi < 5) {
    return "normal";
  }
  if (bmi < 30) {
    return "overweight";
  }
  return "obese";
}

// Grouping ages of users according to age groups
function groupAges(age) {
  if (age < 20) {
    return "0-19";
  }
  if (age < 40) {
    return "20-39";
  }
  if (age < 60) {
    return "40-59";
  }
  if (age < 80) {
    return "60-79";
  }
  return "80+";
}

async function diagnose(userProfile, userSymptoms) {
  const client = await pool.connect();
  try {
    const bmi = computeBMI(userProfile.weight, userProfile.height);
    const bmiCategory = groupBMI(bmi);
    const ageGroup = groupAges(userProfile.age);

    // Fetching data from the database
    const conditionsData = await client.query(`
      SELECT condition AS condition,
      symptoms AS symptoms,
      symptomweights AS symptomweights
      FROM "Conditions"`);

    const riskScoresData = await client.query(
      `
      SELECT condition, prevalence
      FROM demographicsToDisease
      WHERE agegroup = $1,
      AND gender = $2,
      AND bmicategory = $3`,
      [ageGroup, userProfile.gender, bmiCategory]
    );

    const riskMap = {};
    for (const { condition, prevalence } of riskScoresData.rows) {
      riskMap[condition] = prevalence;
    }

    const conditionScore = conditionsData.rows.map((row) => {
      let score = 0;
      for (const symptom of userSymptoms) {
        score += row.weights[symptom] || 0;
      }
      score *= riskMap[row.condition] ?? 1.0;
      return { condition: row.condition, score: conditionScore };
    });

    return conditionScore
      .sort((a, b) => b.conditionScore - a.conditionScore)
      .slice(0, 2)
      .map(([condition, conditionScore]) => ({ condition, conditionScore }));
  } finally {
    client.release();
  }
}

module.exports = { diagnose };


require("dotenv").config()

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
  if (bmi < 25) {
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


// Temporal decay function for symptom duration
function calculateTemporalDecay(symptomDuration) {
  if (symptomDuration <= 1) {
    return 1.0;
  }
  if (symptomDuration <= 7) {
    // More weight to recent symptoms
    return 1.2;
  }
  if (symptomDuration <= 14) {
    return 0.9;
  }
  if (symptomDuration <= 30) {
    return 0.7;
  }
  return 0.5; // for chronic symptoms
}

// Using Bayes' Theorem to calculate the probability of a condition given the symptoms and demographics
function calculateConfidence(
  score,
  totalSymptoms,
  matchedSymptoms,
  demographicFactor
) {
  const symptomCoverage = matchedSymptoms / Math.max(totalSymptoms, 1);
  const normalizedScore = score / (score + 10);
  const demographicConfidence = Math.log(demographicFactor + 1) / 2;

  return Math.min(
    0.95,
    symptomCoverage * 0.4 + normalizedScore * 0.4 + demographicConfidence * 0.2
  );
}

// Calculating user's lifestyle risk based on their profile
function calculateLifestyleRisk(userProfile) {
  let riskMultiplier = 1.0;

  // Exercise factor
  const exerciseFrequency = userProfile.weeklyExercise || 0;
  if (exerciseFrequency < 2) {
    riskMultiplier *= 1.4;
  } else if (exerciseFrequency > 4) {
    riskMultiplier *= 0.8;
  }

  // Stress level factor
  const stressLevel = userProfile.stressLevel || 2;
  riskMultiplier *= 1 + (stressLevel - 2) * 0.15;

  // Sleep quality factor
  const sleepQuality = userProfile.sleepQuality || 3;
  riskMultiplier *= (6 - sleepQuality) * 0.1 + 0.7;

  // Smoking factor
  if (userProfile.smoking === "current") {
    riskMultiplier *= 1.2;
  }
  if (userProfile.smoking === "past") {
    riskMultiplier *= 0.8;
  }

  // Alcohol consumption factor
  const weeklyAlcoholConsumption = userProfile.AlcoholPerWeek || 0;
  if (weeklyAlcoholConsumption > 7) {
    riskMultiplier *= 1.1;
  }
  if (weeklyAlcoholConsumption > 14) {
    riskMultiplier *= 1.4;
  }
  return riskMultiplier;
}

// Getting final score
function calculateEnsembleScore(baseScore, symptomData) {
  const scores = [];

  scores.push(baseScore);

  const symptomWeights = Object.values(symptomData.symptomweights || {}).filter(
    (w) => w > 0
  );
  if (symptomWeights.length > 0) {
    const geometricMean =
      Math.pow(
        symptomWeights.reduce((prod, w) => prod * (w + 1), 1),
        1 / symptomWeights.length
      ) - 1;
    scores.push(geometricMean * 2); // Normalizing it and making it more comparable to base score
  }

  const weightsArray = Object.values(symptomData.weights || {});
  const maxWeight = Math.max(...weightsArray);

  const exponentialScore = weightsArray.reduce((sum, w) => {
    return sum + Math.exp(w / Math.max(maxWeight, 1)) - 1; // To normalize the weights
  }, 0);
  scores.push(exponentialScore);

  const weights = [0.4, 0.3, 0.3]; // weight each of the three metrics hold in the final score
  return scores.reduce((sum, score, i) => sum + score * weights[i], 0);
}

async function diagnose(userProfile, userSymptoms) {
  const client = await pool.connect();
  try {
    const bmi = computeBMI(userProfile.weight, userProfile.height);
    const bmiCategory = groupBMI(bmi);
    const ageGroup = groupAges(userProfile.age);


    // Calculate lifestyle risk multiplier
    const lifestyleRisk = calculateLifestyleRisk(userProfile);

    // Getting conditions and their symptom weights
    const condRes = await client.query(`
      SELECT condition AS condition,
      symptomweights AS symptomweights,
      symptoms AS symptoms
      FROM "Conditions"
      `);

    const riskScoresData = await client.query(
      `
      SELECT condition, prevalence
      FROM "DemographicsToDiseases"
      WHERE agegroup = $1
      AND gender = $2
      AND bmicategory = $3;
      `,
      [ageGroup, userProfile.gender, bmiCategory]
    );

  const conditionScore = {};

    const precautionsMap = {}

  // Getting precautions for each condition
  for (const entry of initialPrecautionsMap) {
    if (entry.disease && Array.isArray(entry.precautions)) {
      precautionsMap[entry.disease.toLowerCase().trim()] = entry.precautions
    }
  }
  // Condition-symptom matching/scoring
  for (const conditionInfo of conditionMap) {
    const conditionName = conditionInfo.condition;
    const weights = conditionInfo.symptomWeights;
    let totalScore = 0;


    // Extracting user's symptoms, their severity and duration
    const symptomNames = userSymptoms.map((s) =>
      typeof s === "string" ? s : s.name
    );
    const symptomMap = new Map();
    userSymptoms.forEach((s) => {
      if (typeof s === "object") {
        symptomMap.set(s.name, {
          severity: s.severity || 3,
          duration: s.duration || 1,
        });
      } else {
        symptomMap.set(s, { severity: 3, duration: 1 });
      }
    });
    // Scoring each condition
    const scores = condRes.rows.map((row) => {
      let baseScore = 0;
      let matchedSymptoms = 0;

      for (const sym of symptomNames) {
        const weight = row.symptomweights?.[sym] ?? 0;
        if (weight > 0) {
          matchedSymptoms++;
          const symptomData = symptomMap.get(sym);
          const severityMultiplier = 1 + (symptomData.severity - 3) * 0.2;
          const temporalDecay = calculateTemporalDecay(symptomData.duration);
          baseScore += weight * severityMultiplier * temporalDecay;
        }
      }
      const demographicRisk = riskMap[row.condition] ?? 1.0;

      // Getting ensemble score
      const ensembleScore = calculateEnsembleScore(
        baseScore,
        userProfile,
        row.condition,
        row
      );

      // Getting the final score
      const finalScore = ensembleScore * demographicRisk * lifestyleRisk;

      // Calculating confidence
      const confidence = calculateConfidence(
        finalScore,
        symptomNames.length,
        matchedSymptoms,
        demographicRisk
      );

      return {
        condition: row.condition,
        score: parseFloat(finalScore.toFixed(2)),
        confidence: parseFloat(confidence.toFixed(2)),
      };

    });
    conditionScore[conditionName] = totalScore;
  }

  for (const conditionName of Object.keys(conditionScore)) {
    const demographicSlice = (demoMap[conditionName] || {})[ageGroup] || {};
    const genderSlice = demographicSlice[userProfile.gender] || {};
    const riskScore = genderSlice[bmiCategory] || 1.0;


    const topDiagnoses = scores
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((result) => ({
        ...result,
        recommendedAction:
          result.confidence > 0.7 && result.score > 10
            ? "Seek immediate care"
            : result.confidence > 0.5
            ? "Consult a doctor"
            : "Monitor your symptoms",
      }));

    return {
      diagnoses: topDiagnoses,
    };
  } finally {
    client.release();

  }

  return Object.entries(conditionScore)
    .sort(([, aScore], [, bScore]) => bScore - aScore)
    .slice(0, 2)
    .map(([condition, score]) => ({
      condition,
      score,
    precautions: [
      "Seek medical attention if symptoms worsen",
      ...(precautionsMap[condition.toLowerCase()] || [])
    ] }));
}

module.exports = { diagnose };

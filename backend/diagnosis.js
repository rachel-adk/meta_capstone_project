import dotenv from "dotenv";
import pkg from "pg";
const { Pool } = pkg;
dotenv.config();
const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

/**
 *
 * Medical Diagnosis System
 *
 * This system implements a medical diagnosis system that takes in user symptoms and demographics and returns a list of possible diagnoses along with their scores and confidence
 *
 * 1. User Input Processing
 * - Taked user profile(age, gender, height, weight, etc)
 * - Take user symptoms and their severity and duration
 *
 * 2. Risk Factor Calculation
 * - Calculate BMI and group it into categories
 * - Age group classification for demographic risk assessment
 * - Calculate lifestyle risk based on user profile
 *
 * 3. Diagnosis Algorithm
 * - Fetches all conditions and their symptom weights from the database
 * - Matches user's symptoms against condition-symptom database
 * -Applies temporal decay to symptoms based on their duration
 * - Calculates ensemble score for each condition
 * - Calculates demographic risk based on user's demographics
 * - Generates confidence score using a Bayesian approach
 *
 * 4. Results:
 * - Returns top 3 most likely diagnoses ranked by their scores
 * - Provides confidence percentage for each diagnosis
 * - Provides recommended actions for each diagnosis based on risk score
 *
 * The scoring system combines symptom matching, demographic risk factors, and lifestyle risk factors to provide a comprehensive assessment of the user's medical condition.
 *

 */

// Lifestyle Risk Multiplier Constants
//Exercise Mulipliers
const exerciseMultiplier = {
  lowExerciseThreshold: 2, // Less than 2 days of exercise per week
  lowExerciseRisk: 1.4, // Risk multiplier for low exercise
  highExerciseThreshold: 4, // More than 4 days of exercise per week
  highExerciseRisk: 0.8, // Risk multiplier for high exercise(20% reduction for regualr exercise)
};

// Stress Level Multipliers
const stressLevelMultiplier = {
  baseStressLevel: 2, // Neutral stress level
  stressIncrement: 0.15, // 15% increase in risk level above baseline
};

// Sleep Quality Multipliers
const sleepQualityMultiplier = {
  baseSleepQuality: 3, // Average sleep quality
  sleepFactorMin: 0.7, // Minimum multiplier for good sleep quality
  sleepFactorRange: 0.1, //Range of sleep impact on health
};

// Smoking Multipliers
const smokingMultiplier = {
  currentSmokerRisk: 1.2, // 20% increased risk for current smokers
  pastSmokerRisk: 0.8, // 20% reduced risk for past smokers
};

// Alcohol Consumption Multipliers
const alcoholConsumptionMultiplier = {
  moderateThreshold: 7, // 7 drinks per week - CDC moderate drinking
  moderateRisk: 1.1, // 10% increased risk for moderate drinking
  highThreshold: 14, // 14 drinks per week - heavy drinking
  highRisk: 1.4, // 40% increased risk for heavy drinking
};

// Confidence Weights
const confidenceWeights = {
  symptomCoverage: 0.4, // 40% weight for symptom coverage
  normalizedScore: 0.4, // 40% weight for score magnitude
  demographicFactor: 0.2, // 20% risk for demographic factor
  maxConfidence: 0.95, // Maximum confidence level
};

// Temporal Decay Constants
const temporalDecay = {
  acute: { maxDays: 1, weight: 1.0 }, // very recent symptoms
  recent: { maxDays: 7, weight: 1.2 }, // recent symptoms get highest weight
  subacute: { maxDays: 14, weight: 0.9 }, // symptoms in the past week -  moderate duration
  moderate: { maxDays: 30, weight: 0.7 }, // symptoms in the past month -  longer duration
  chronic: { weight: 0.5 }, // symptoms in the past month
};

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
    return temporalDecay.acute.weight;
  }
  if (symptomDuration <= 7) {
    // More weight to recent symptoms
    return temporalDecay.recent.weight;
  }
  if (symptomDuration <= 14) {
    return temporalDecay.subacute.weight;
  }
  if (symptomDuration <= 30) {
    return temporalDecay.moderate.weight;
  }
  return temporalDecay.chronic.weight; // for chronic symptoms
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
    confidenceWeights.maxConfidence,
    symptomCoverage * confidenceWeights.symptomCoverage +
      normalizedScore * confidenceWeights.normalizedScore +
      demographicConfidence * confidenceWeights.demographicFactor
  );
}

// Calculating user's lifestyle risk based on their profile
function calculateLifestyleRisk(userProfile) {
  let riskMultiplier = 1.0;

  // Exercise factor
  const exerciseFrequency = userProfile.weeklyExercise || 0;
  if (exerciseFrequency < exerciseMultiplier.lowExerciseThreshold) {
    riskMultiplier *= exerciseMultiplier.lowExerciseRisk;
  } else if (exerciseFrequency > exerciseMultiplier.highExerciseThreshold) {
    riskMultiplier *= exerciseMultiplier.highExerciseRisk;
  }

  // Stress level factor
  const stressLevel =
    userProfile.stressLevel || stressLevelMultiplier.baseStressLevel;
  riskMultiplier *=
    1 +
    (stressLevel - stressLevelMultiplier.baseStressLevel) *
      stressLevelMultiplier.stressIncrement;

  // Sleep quality factor
  const sleepQuality =
    userProfile.sleepQuality || sleepQualityMultiplier.baseSleepQuality;
  riskMultiplier *=
    (6 - sleepQuality) * sleepQualityMultiplier.sleepFactorRange +
    sleepQualityMultiplier.sleepFactorMin;

  // Smoking factor
  if (userProfile.smoking === "current") {
    riskMultiplier *= smokingMultiplier.currentSmokerRisk;
  }
  if (userProfile.smoking === "past") {
    riskMultiplier *= smokingMultiplier.pastSmokerRisk;
  }

  // Alcohol consumption factor
  const weeklyAlcoholConsumption = userProfile.AlcoholPerWeek || 0;
  if (
    weeklyAlcoholConsumption > alcoholConsumptionMultiplier.moderateThreshold
  ) {
    riskMultiplier *= alcoholConsumptionMultiplier.moderateRisk;
  }
  if (weeklyAlcoholConsumption > alcoholConsumptionMultiplier.highThreshold) {
    riskMultiplier *= highRisk;
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

    const riskMap = {};
    for (const { condition, prevalence } of riskScoresData.rows) {
      riskMap[condition] = prevalence;
    }

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

    const topCondition = topDiagnoses[0]?.condition;
    let precautions = [];
    if (topCondition) {
      const precautionsMap = await client.query(
        'SELECT precautions FROM "Precautions" WHERE condition = $1',
        [topCondition]
      );
      precautions = precautionsMap.rows[0]?.precautions;
    }

    if (topDiagnoses[0]) {
      topDiagnoses[0].precautions = precautions;
    }

    return {
      diagnoses: topDiagnoses,
      topDiagnosis: topDiagnoses[0],
    };
  } finally {
    client.release();
  }
}

export { diagnose };

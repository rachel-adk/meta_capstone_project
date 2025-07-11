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

// Getting data from both datasets
const conditionMap = require("./data/conditions.json");
const demoMap = require("./data/demographicsToDiseases.json");

function diagnose(userProfile, userSymptoms) {
  const bmi = computeBMI(userProfile.weight, userProfile.height);
  const bmiCategory = groupBMI(bmi);

  const ageGroup = groupAges(userProfile.age);

  const conditionScore = {};

  // Condition-symptom matching/scoring
  for (const conditionInfo of conditionMap) {
    const conditionName = conditionInfo.condition;
    const weights = conditionInfo.symptomWeights;
    let totalScore = 0;

    userSymptoms.forEach((symptom) => {
      const w = weights[symptom] || 0;
      totalScore += w;
    });
    conditionScore[conditionName] = totalScore;
  }

  for (const conditionName of Object.keys(conditionScore)) {
    const demographicSlice = (demoMap[conditionName] || {})[ageGroup] || {};
    const genderSlice = demographicSlice[userProfile.gender] || {};
    const riskScore = genderSlice[bmiCategory] || 1.0;

    conditionScore[conditionName] *= riskScore;
  }

  return Object.entries(conditionScore)
    .sort(([, aScore], [, bScore]) => bScore - aScore)
    .slice(0, 2)
    .map(([condition, score]) => ({ condition, score }));
}

module.exports = { diagnose };

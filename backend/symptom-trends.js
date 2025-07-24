const { PrismaClient } = require("prisma/client");
const sendEmailNotification = require("./email-notifications");
const { verifySendEmailNotification } = require("./inactivity-checks");
const prisma = new PrismaClient();
require("dotenv").config();

// Defining weights for each condition
const symptomTrends = {
  repeatedSymptom: 2,
  repeatedAllergy: 2,
  severeSymptom: 3,
  excalating: 4,
  chronic: 2,
  multipleSymptoms: 3,
};

const TrendDays = 14;
const notificationThreshold = 4;

async function symptomAndAllergyTrends(userId) {
  try {
    // Getting the range of days
    const today = new Date();
    const fourDaysAgo = new Date();
    fourDaysAgo.setDate(today.getDate() - TrendDays);

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        symptoms: {
          where: {
            createdAt: {
              gte: fourDaysAgo,
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        allergies: {
          where: {
            createdAt: {
              gte: fourDaysAgo,
            },
          },
        },
      },
    });

    if (!user) throw new Error("User not found");

    // Initialize rules
    let conditions = {
      repeatedSymptom: false,
      repeatedAllergy: false,
      severeSymptom: false,
      escalating: false,
      multipleSymptoms: false,
    };

    let analysisData = {
      userId: user.id,
      patterns: [],
      riskScore: 0,
      recommendations: [],
      symptomSummary: {},
      totalSymptoms: user.symptoms.length,
    };

    const weightedSymptoms = applyTimeDecay(user.symptoms);

    const symptomAnalysis = analyzeSymptomPatterns(weightedSymptoms);

    // analyze allergy patterns
    const allergyAnalysis = analyzeAllergyPatterns(user.allergies);
    conditions.repeatedAllergy = allergyAnalysis.repeatedAllergy;
    if (allergyAnalysis.patterns.length > 0) {
      analysisData.patterns.push(...allergyAnalysis.patterns);
    }

    // Calculate the risk score
    const totalWeight = calculateRiskScore(conditions, symptomTrends);
    analysisData.riskScore = Math.min(totalWeight * 10, 100);

    // Generate recommendations based on patterns
    analysisData.recommendations = generateRecommendations(
      conditions,
      analysisData.riskScore,
      analysisData.patterns
    );

    // Sending notifications if threshold is reached
    if (verifySendEmailNotification(user)) {
      if (totalWeight >= notificationThreshold) {
        await sendEmailNotification(user.email, conditions, analysisData);

        //update last notified at
        await prisma.user.update({
          where: { id: user.id },
          data: { lastNotifiedAt: new Date() },
        });
      }
    }
    return {
      conditions,
      analysisData,
      notificationSent: totalWeight >= notificationThreshold,
    };
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Applying time decay to symptoms
function applyTimeDecay(symptoms) {
  const now = new Date();

  return symptoms.map((symptom) => {
    const hoursAgo = (now - new Date(symptom.createdAt)) / (1000 * 60 * 60);
    let weight = 1;

    if (hoursAgo <= 24) {
      weight = 1.0;
    } else if (hoursAgo <= 72) {
      weight = 0.8;
    } else if (hoursAgo <= 168) {
      weight = 0.6;
    } else if (hoursAgo <= 336) {
      weight = 0.4;
    } else {
      weight = 0.2;
    }
    return {
      ...symptom,
      weight,
      weightedSeverity: symptom.severity * weight,
      hoursAgo,
    };
  });
}

// Analyze symptom patterns
function analyzeSymptomPatterns(weightedSymptoms) {
  const conditions = {
    repeatedSymptom: false,
    severeSymptom: false,
    escalating: false,
    multipleSymptoms: false,
    chronic: false,
  };

  const patterns = [];
  const symptomGroups = {};
  weightedSymptoms.forEach((s) => {
    const name = s.name.toLowerCase();
    if (!symptomGroups[name]) {
      symptomGroups[name] = {
        occurrences: 0,
        totalWeightedSeverity: 0,
        severities: [],
        weightedSeverities: [],
        dates: [],
      };
    }
    symptomGroups[name].occurences++;
    symptomGroups[name].totalWeightedSeverity += s.weightedSeverity;
    symptomGroups[name].severities.push(s.severity);
    symptomGroups[name].weightedSeverities.push(s.weightedSeverity);
    symptomGroups[name].dates.push(s.createdAt);
  });

  // Detect patterns
  Object.entries(symptomGroups).forEach(([symptomName, data]) => {
    if (data.occurrences >= 3) {
      conditions.repeatedSymptom = true;
      patterns.push({
        type: "recurring",
        symptom: symptomName,
        occurrences: data.occurrences,
        message: `${symptomName} has been reported ${data.occurrences} times in the past ${TrendDays} days.`,
      });
    }
    if (data.totalWeightedSeverity / data.occurrences >= 3.5) {
      analysis.patterns.push({
        type: "severe",
        symptom: symptomName,
        averageSeverity: data.totalWeightedSeverity / data.occurrences,
      });
    }

    if (isEscalatingPattern(data.severities, data.dates)) {
      conditions.escalating = true;
      patterns.push({
        type: "escalating",
        symptom: symptomName,
        message: `${symptomName} has been escalating in severity over time.`,
      });
    }
    // Check for chronic pattern
    if (data.occurrences >= 5 && getDaySpan(data.dates) >= 7) {
      conditions.chronic = true;

      patterns.push({
        type: "chronic",
        symptom: symptomName,
        message: `${symptomName} has persisted for more than a week.`,
      });
    }
  });

  // Checking for multiple symptoms
  const uniqueSymptoms = Object.keys(symptomGroups).length;
  if (uniqueSymptoms >= 3) {
    conditions.multipleSymptoms = true;
    patterns.push({
      type: "multiple",
      count: uniqueSymptoms,
      message: `Multiple symptoms have been reported in the past few days.`,
    });
  }
  return { conditions, patterns, summary: symptomGroups };
}
//Checking to see if the pattern is escalating
function isEscalatingPattern(severities, dates) {
  if (severities.length < 3) return false;

  //sorting by date
  const sortedData = severities
    .map((severity, index) => ({
      severity,
      date: dates[index],
    }))
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  // Check if severity is increasing over time
  let increases = 0;
  for (let i = 1; i < sortedData.length; i++) {
    if (sortedData[i].severity > sortedData[i - 1].severity) {
      increases++;
    }
  }
  return increases > sortedData.length / 2;
}

// Getting day span between first and last occurrence
function getDaySpan(dates) {
  if (dates.length < 2) return 0;
  const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));
  const firstDate = new Date(sortedDates[0]);
  const lastDate = new Date(sortedDates[sortedDates.length - 1]);
  return Math.floor((lastDate - firstDate) / (1000 * 60 * 60 * 24));
}

// Analyze allergy patterns
function analyzeAllergyPatterns(allergies) {
  const allergyGroups = {};
  const patterns = [];

  allergies.forEach((allergy) => {
    const trigger = allergy.trigger.toLowerCase();
    allergyGroups[trigger] = (allergyGroups[trigger] || 0) + 1;
  });

  let hasRepeatedAllergy = false;
  Object.entries(allergyGroups).forEach(([trigger, count]) => {
    if (count >= 3) {
      hasRepeatedAllergy = true;
      patterns.push({
        type: "allergy",
        trigger,
        occurrences: count,
        message: `${trigger} has been reported as an allergen ${count} times`,
      });
    }
  });
  return { hasRepeatedAllergy, patterns };
}
// Calculate risk score
function calculateRiskScore(conditions, weights) {
  return Object.entries(conditions).reduce((total, [condition, value]) => {
    return sum + (value ? weights[condition] : 0);
  }, 0);
}

// Generate recommendations based on patterns
function generateRecommendations(conditions, riskScore) {
  const recommendations = [];

  if (riskScore >= 70) {
    recommendations.push("Your symptoms indicate a high health risk");
    recommendations.push("Please visit a doctor immediately");
  } else if (riskScore >= 50) {
    recommendations.push("Your symptoms indicate a moderate health risk");
    recommendations.push(
      "Please visit a doctor within the next few days or if it gets worse"
    );
  }

  if (conditions.escalating) {
    recommendations.push(
      "Your symptoms are escalating over time. Please visit a doctor as soon as possible"
    );
  }
  if (conditions.multipleSymptoms) {
    recommendations.push(
      "You have multiple symptoms. Please visit a doctor to rule out any underlying conditions"
    );
  }
  if (conditions.chronic) {
    recommendations.push(
      "Your symptoms have been persistent for more than a week. Please visit a doctor to rule out any underlying conditions"
    );
  }
  if (conditions.repeatedAllergy) {
    recommendations.push(
      "You have experienced repeated allergic reactions. Please visit a doctor to rule out any underlying conditions"
    );
  }
  //general recommendations
  if (riskScore >= 30) {
    recommendations.push("Continue monitoring your symptoms");
    recommendations.push(
      "Please visit a doctor if you have any concerns or if your symptoms worsen"
    );
  }
}

module.exports = symptomAndAllergyTrends;

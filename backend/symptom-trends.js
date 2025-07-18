const { PrismaClient } = require("prisma/client");
const sendEmailNotification = require("./email-notifications");
const prisma = new PrismaClient();
require('dotenv').config()

// Defining weights for each condition
const symptomTrends = {
  repeatedSymptom: 2,
  repeatedAllergy: 2,
  severeSymptom: 3,
};

const TrendDays = 4;
const notificationThreshold = 4;

async function symptomAndAllergyTrends(userId) {
  // Getting the range of days
  const today = new Date();
  const fourDaysAgo = new Date();
  fourDaysAgo.setDate(today.getDate() - TrendDays);

  const user = await prisma.user.findUnique({
    where: { userId: id },
    include: {
      symptoms: {
        where: {
          createdAt: {
            gte: fourDaysAgo,
          },
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
  };

  // Checking for symptom severity/count
  const symptomCounts = {};
  user.symptoms.forEach((symptom) => {
    const name = symptom.name.toLowerCase();
    symptomCounts[name] = (symptomCounts[name] || 0) + 1;

    if (symptom.severity && symptom.severity >= 3) {
      conditions.severeSymptom = true;
    }
  });

  // Checking for repeated symptoms
  if (Object.values(symptomCounts).some((count) => count >= 3)) {
    conditions.repeatedSymptom = true;
  }

  //Checking for repeated allergy logs
  const allergyCounts = {};
  user.allergies.forEach((allergy) => {
    const name = allergy.name.toLowerCase();
    allergyCounts[name] = (allergyCounts[name] || 0) + 1;
  });

  if (Object.values(allergyCounts).some((count) => count >= 3)) {
    conditions.repeatedAllergy = true;
  }

  // Calculating risk score to see if it reaches the threshold
  const totalWeight = Object.entries(conditions).reduce((sum, [key, value]) => {
    return sum + (value ? symptomTrends[key] : 0);
  }, 0);

  if (totalWeight >= notificationThreshold) {
    await sendEmailNotification(user.email, conditions);
  }
  return { conditions, totalWeight };
}

module.exports = symptomAndAllergyTrends;

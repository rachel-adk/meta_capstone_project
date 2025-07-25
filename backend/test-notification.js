import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "./generated/prisma/index.js";
import  symptomAndAllergyTrends  from "./symptom-trends.js";
const prisma = new PrismaClient();

async function emailTest() {
  console.log("Sending test email");
  const testEmail = process.env.TEST_EMAIL || process.env.EMAIL_USER;
  let userId;
  console.log("Sending test email to", testEmail);

  try {
    const user = await prisma.user.upsert({
        where: { username: "Test_User" },
      update: {},
      create: {
        email: testEmail,
        username: "Test_User",
        preferredNotification: "email",
        symptoms: {
          create: [
            { name: "headache", severity: 5, duration: 5 },
            { name: "chest pain", severity: 5, duration: 5 },
            { name: "nose bleed", severity: 5, duration: 2 },
            { name: "vomiting", severity: 5, duration: 2 },
          ],
        },
      },
    });
    userId = user.id;
    console.log("Created test user");

    const testData = await symptomAndAllergyTrends(userId);
    console.log("Results:");
    console.log("--Risk Score", testData.analysisData.riskScore);
    console.log("-Email Sent", testData.notificationSent ? "YES" : "NO");

    if (testData.notificationSent) {
      console.log("Sending test email", testEmail);
    }
  } catch (error) {
    console.error(`\nEmail failed to send ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}
emailTest();

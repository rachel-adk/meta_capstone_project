import cron from "node-cron"
import { PrismaClient } from "./generated/prisma/index.js";
import sendEmailNotifications  from "./email-notifications.js"
import symptomAndAllergyTrends from "./symptom-trends.js"
const prisma = new PrismaClient();

// Check if user should receive email notifications
export function verifySendEmailNotifications(user) {
  const now = new Date();

  if (user.preferredNotification !== "email") {
    return false;
  }
  if (user.snoozeUntil && user.snoozeUntil > now) {
    return false;
  }

  // Check if enough time has passed since the last notification
  if (user.lastNotifiedAt) {
    const daySinceLastNotified =
      (now - new Date(user.lastNotifiedAt)) / (1000 * 60 * 60 * 24);
    return daySinceLastNotified >= user.reminderFrequency;
  }
  return true;
}

// Notification check function
export async function notificationCheck() {
  console.log("Notification check started");
  try {
    await checkInactiveUsers();
    await checkUsersWithNoSymptoms();
    await checkSymptomPatterns();
    console.log("Notification check complete");
  } catch (error) {
    console.error("Error in notification check:", error);
  }
}

// Check for inactive users
async function checkInactiveUsers() {
    const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const inactiveUsers = await prisma.user.findMany({
    where: {
      lastLoginAt: { lt: sevenDaysAgo },
    },
  });

  for (const user of inactiveUsers) {
    if (verifySendEmailNotification(user)) {
      await sendEmailNotifications(
        user.email,
        {
          inactive: true,
        },
        {
          userId: user.id,
          daysSinceLastCheck: 7,
          recommendations: [
            "Please update your health logs with any recent changes.",
          ],
        }
      );

      await prisma.user.update({
        where: { id: user.id },
        data: { lastNotifiedAt: new Date() },
      });
    }
  }
}

// Check for users with no symptoms
async function checkUsersWithNoSymptoms() {
    const now = new Date();
  const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);

  const usersWithNoSymptoms = await prisma.user.findMany({
    where: {
      symptoms: {
        none: {
          createdAt: { gte: fiveDaysAgo },
        },
      },
    },
  });
  for (const user of usersWithNoSymptoms) {
    if (verifySendEmailNotification(user)) {
      await sendEmailNotifications(
        user.email,
        {
          noSymptoms: true,
        },
        {
          recommendations: [
            "You haven't reported any symptoms in a while. Check your health logs!",
          ],
        }
      );

      await prisma.user.update({
        where: { id: user.id },
        data: { lastNotifiedAt: new Date() },
      });
    }
  }
}

// Check for symptom patterns
async function checkSymptomPatterns() {
  const users = await prisma.user.findMany({
    where: {
      symptoms: {
        some: {
          createdAt: { gte: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000) },
        },
      },
    },
  });

  for (const user of users) {
    await symptomAndAllergyTrends(user);
  }
}

// Initialize scheduler
export function initializeScheduler() {
  // Run every hour
  cron.schedule("0 * * * *", notificationCheck);
  // Run every day at 8am
  cron.schedule("0 8 * * *", notificationCheck);
  console.log("Scheduler initialized");
}

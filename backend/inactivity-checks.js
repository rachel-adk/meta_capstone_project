const cron = require("node-cron");
const { PrismaClient } = require("@prisma/client");
const sendEmailNotification = require("./email-notifications.js");
const prisma = new PrismaClient();

function verifySendEmailNotification() {
  const now = new Date();

  if (user.preferredNotification !== "email") {
    return false;
  }
  if (user.snoozeUntil && user.snoozeUntil > now) {
    return false;
  }

  if (user.lastNotifiedAt) {
    const daySinceLastNotified =
      (now - new Date(user.lastNotifiedAt)) / (1000 * 60 * 60 * 24);
    return daySinceLastNotified >= user.reminderFrequency;
  }
  return true;
}

// Schedule function to run every day at 8am
cron.schedule("0 8 * * *", async () => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
  const fiveDaysAgo = new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000);

  const inactiveUsers = await prisma.user.findMany({
    where: {
      lastLoginAt: { lt: sevenDaysAgo },
    },
  });

  for (const user of inactiveUsers) {
    if (verifySendEmailNotification(user)) {
      await sendEmailNotification(
        user.email,
        {
          inactive: true,
        },
        "You haven't logged into your account in a while. Check your health logs!"
      );
    }
    await prisma.user.update({
      where: { id: user.id },
      data: { lastNotifiedAt: new Date() },
    });
  }

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
      await sendEmailNotification(
        user.email,
        {
          noSymptoms: true,
        },
        "You haven't reported any symptoms in a while. Check your health logs!"
      );
    }
    await prisma.user.update({
      where: { id: user.id },
      data: { lastNotifiedAt: new Date() },
    });
  }

  console.log("Inactivity check complete");
});

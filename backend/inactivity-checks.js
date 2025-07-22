const cron = require("node-cron");
const { PrismaClient } = require("@prisma/client");
const sendEmailNotification = require("./email-notifications.js");
const prisma = new PrismaClient();

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
    await sendEmailNotification(
      user.email,
      "You haven't logged into your account in a while. Check your health logs!"
    );
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
    await sendEmailNotification(
      user.email,
      "You haven't reported any symptoms in a while. Check your health logs!"
    );
  }

  console.log("Inactivity check complete");
});

require("dotenv").config();

const sendEmailNotifications = require("./email-notifications");
const sendEmailNotification = require("./email-notifications");

const testRecepient = "radorkor@meta.com";

sendEmailNotifications(
  testRecepient, {
    testing: true
  },
  "✅Testing Email Notifications"
);

require("dotenv").config();

const sendEmailNotifications = require("./email-notifications");
const sendEmailNotification = require("./email-notifications");

const testRecepient = "jasyn.j.64@gmail.com";

sendEmailNotifications(
  testRecepient, {
    testing: true
  },
  "✅Testing Email Notifications"
);

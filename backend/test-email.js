require("dotenv").config();

const sendEmailNotifications = require("./email-notifications");
const sendEmailNotification = require("./email-notifications");

const testRecepient = "racheladksena@gmail.com";

sendEmailNotifications(
  testRecepient,
  "✅Testing Email Notifications"
);

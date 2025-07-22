const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function sendEmailNotifications(toEmail, conditions) {
  const conditionMessages = Object.keys(conditions)
    .filter((key) => conditions[key])
    .map((key) => `-${key.replace(/([A-Z])/g, " $1")}`) // Changing keys from camelCase
    .join("\n");

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: toEmail,
    subject: "Health Alert",
    text: `We noticed concerning trends in your logs: \n\n${conditionMessages}\n\nPlease consult a doctor if needed`,
  };

  await transporter.sendMail(mailOptions);
  console.log(`Email sent to ${toEmail}`);
}

module.exports = sendEmailNotifications;

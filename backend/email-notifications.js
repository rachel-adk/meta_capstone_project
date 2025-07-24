require("dotenv").config();
import { createTransport } from "nodemailer";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const transporter = createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Helper functions

// Select the appropriate email template based on the conditions
function selectEmailTemplate(conditions, riskScore = 0) {
  // High priority conditions
  if (conditions.severeSymptoms || riskScore >= 70) {
    return {
      name: "urgent",
      type: "severity_alert",
      priority: "high"
    };
  }
  // Behavioral changees
  if (conditions.inactive || conditions.noSymptoms) {
    return {
      name: "reminder",
      type: "behavioral",
      priority: "low"
    };
  }
  //Pattern-based conditions
  if (
    conditions.repeatedSymptom ||
    conditions.repeatedAllergy ||
    conditions.escalating
  ) {
    return {
      name: "pattern",
      type: "pattern_detected",
      priority: "medium"
    };
  }
  return {
    name: "standard",
    type: "health_update",
    priority: "medium",
  };
}
// Building personalized email content
function buildEmailContent(template, conditions, analysisData) {
  const {
    patterns = [],
    recommendations = [],
  } = analysisData;

  //Subject line
  const subject = generateSubject(template, conditions, analysisData);

  let body = "";

  // Header
  body += generateHeader(template, conditions, analysisData);
  body += "\n" + "=".repeat(50) + "\n\n";

  // Risk Assessment
  if (analysisData.riskScore > 0) {
    body += generateRiskAssessment(analysisData.riskScore);
    body += "\n";
  }

  // Condition Summary
  if (hasActiveConditions(conditions)) {
    body += generateConditionSummary(conditions);
    body += "\n";
  }

  // Pattern Summary
  if (patterns.length > 0) {
    body += "PATTERNS DETECTED:\n";
    body += "-".repeat(30) + "\n";
    patterns.forEach((pattern, index) => {
      body += `${index + 1}. ${formatPattern(pattern)}\n`;
    });
    body += "\n";
  }

  // Recommendations
  if (recommendations.length > 0) {
    body += "RECOMMENDED ACTIONS:\n";
    body += "-".repeat(30) + "\n";
    recommendations.forEach((recommendation, index) => {
      body += `${index + 1}. ${recommendation}\n`;
    });
    body += "\n";
  }

  //Footer
  body += generateFooter();

  return { subject, body };
}
// Generate email subject
function generateSubject(template, conditions, analysisData) {
  const subjects = {
    urgent: "URGENT: Your symptoms require immediate attention",
    reminder: " Health Check-In Reminder",
    pattern: "Health Pattern Detected: Action required",
    standard: "Health Update from HealthConnect",
    weekly: "Weekly Health Update from HealthConnect",
  };

  // Adding risk level to urgent emails
  if (template.name === "urgent" && analysisData.riskScore >= 70) {
    const riskLevel = getRiskLevel(analysisData.riskScore).label;
    return `URGENT [${riskLevel} RISK]: Immediate attention required`;
  }
  return subjects[template.name] || subjects.standard;
}
function generateHeader(template) {
  const headers = {
    urgent:
      "IMMEDIATE ATTENTION REQUIRED \n\n Your recent symptoms indicate a potential health issue that requires immediate attention. ",
    pattern:
      "HEALTH PATTERN DETECTED \n\n Your recent health data has revealed a potential pattern that may indicate a health issue. ",
    reminder:
      "HEALTH CHECK-IN REMINDER \n\n It's been a while since your last check-in. Please take a moment to review tour health data",
    standard:
      "HEALTH UPDATE \n\n Your recent health data has been analyzed and the results are as follows: ",
    weekly:
      "WEEKLY HEALTH UPDATE \n\n Your recent health data has been analyzed and the results are as follows: ",
  };

  return headers[template.name] || headers.standard;
}

// Generate risk assessment
function generateRiskAssessment(riskScore) {
  const riskLevel = getRiskLevel(riskScore);
  let assessment = `RISK ASSESSMENT\n`;
  assessment += "-".repeat(30) + "\n";
  assessment += `Risk Level: ${riskLevel.label}\n`;
  assessment += `Risk Score: ${riskScore}/100\n`;
  assessment += `\n${riskLevel.description}\n`;

  if (riskScore >= 70) {
    assessment += `\n IMMEDIATE ATTENTION REQUIRED \n `;
  }
  return assessment;
}
function generateConditionSummary(conditions) {
  let summary = "ACTIVE CONDITIONS:\n";
  summary += "-".repeat(30) + "\n";

  const conditionMessages = {
    severeSymptoms:
      "Severe symptoms detected. Immediate medical attention required.",
    repeatedSymptom: "Repeated symptoms detected. Possible health issue.",
    repeatedAllergy: "Repeated allergies detected. Possible health issue.",
    escalating: "Symptoms escalating. Immediate medical attention required.",
    inactive: "No recent activity detected. Please check-in.",
    noSymptoms: "No symptoms detected. Please check-in.",
    multipleSymptoms: "Multiple symptoms detected. Possible health issue.",
  };

  Object.entries(conditions).forEach(([condition, value]) => {
    if (value && conditionMessages[condition]) {
      summary += `${conditionMessages[condition]} + \n`;
    }
  });
  return summary;
}

// Format pattern display
function formatPattern(pattern) {
  const typeLabels = {
    recurring: "[RECURRING] ",
    escalating: "[ESCALATING] ",
    multiple: "[MULTIPLE] ",
    allergy: "[ALLERGY] ",
    severe: "",
  };
  const label = typeLabels[pattern.type] || `[${pattern.type.toUpperCase()}] `;
  return `${label}${pattern.message}`;

  // Generate footer
  function generateFooter() {
    return "For more information, please visit the HealthConnect website.";
  }
}

async function sendEmailNotifications(toEmail, conditions, analysisData = {}) {
  try {
    const template = selectEmailTemplate(conditions, analysisData.riskScore);
    const emailContent = buildEmailContent(template, conditions, analysisData);
    const trackingId = `${analysisData.userId}_${Date.now()}`;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: toEmail,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
      headers: {
        "X-Priority": template.priority === "high" ? "1" : "3",
        "X-Tracking-ID": trackingId,
      },
    };

    const info = await transporter.sendMail(mailOptions);

    await logNotification({
      userId: analysisData.userId,
      type: template.type,
      triggerData: {
        conditions,
        ...analysisData,
      },
      emailContent: {
        template: template.name,
        subject: emailContent.subject,
        body: emailContent.body.length,
      },
      status: "sent",
      sentAt: new Date(),
      metrics: {
        messageId: info.messageId,
        trackingId,
      },
    });

    console.log(`Email sent to ${toEmail} -  Type: ${template.type}`);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`Failed to send email to ${toEmail}:`, error);

    // Logging failed notifications
    await logNotification({
      userId: analysisData.userId,
      type: "failed",
      triggerData: {
        conditions,
        ...analysisData,
      },
      status: "failed",
      metrics: {
        error: error.message,
      },
    });
    return { success: false, error: error.message };
  }
}

function getRiskLevel(score) {
  if (score >= 70) {
    return {
      label: "HIGH",
      description:
        "Your risk level is high. Immediate medical attention is required.",
    };
  }
  if (score >= 50) {
    return {
      label: "MODERATE",
      description:
        "Your symptoms show concerning patterns. Please seek medical attention if necessary.",
    };
  }
  if (score >= 30) {
    return {
      label: "LOW",
      description:
        "Your symptoms show minor concerns. Please monitor your health closely.",
    };
  }
  return {
    label: "MINIMAL",
    description:
      "Your symptoms appear to be mild. Continue tracking and maintain healthy habits.",
  };
}

function hasActiveConditions(conditions) {
  return Object.values(conditions).some((value) => value === true);
}

async function logNotification(data) {
  try {
    await prisma.notificationLog.create({ data });
  } catch (error) {
    console.error("Failed to log notification:", error);
  }
}

module.exports = sendEmailNotifications;

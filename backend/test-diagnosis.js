require("dotenv").config();
const { diagnose } = require("./diagnosis.js");

const userProfile1 = {
  age: 65,
  gender: "female",
  weight: 70,
  height: 160,
};
const userSymptoms = ["fatigue", "thirst", "cough"];

const userProfile2 = {
  age: 16,
  gender: "female",
  weight: 52,
  height: 162,
};
const userSymptoms2 = ["bleeding", "vomiting", "diarrhea", "fever", "chills"];
  (async () => {
    try {
      const result1 = await diagnose(userProfile1, userSymptoms);
      console.log("Diagnosis for user 1", result1);
      const result2 = await diagnose(userProfile2, userSymptoms2);
      console.log("Diagnosis for user 2", result2);
    } catch (err) {
      console.error(err);
    } finally {
      process.exit(0);
    }
  })();

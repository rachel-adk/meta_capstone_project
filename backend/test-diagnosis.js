const { diagnose } = require('./diagnosis.js');

const userProfile1 = {
    age:65,
    gender: "female",
    weight: 70,
    height: 160
}
const userSymptoms = ["fatigue", "thirst", "cough"]
console.log("Top diagnoses:", diagnose(userProfile1, userSymptoms))

const userProfile2 = {
    age:16,
    gender: "female",
    weight: 52,
    height: 162
}
const userSymptoms2 = ["bleeding", "vomiting", "diarrhea", "fever", "chills"]
console.log("Top diagnoses:", diagnose(userProfile2, userSymptoms2))

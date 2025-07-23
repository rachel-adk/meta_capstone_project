import dotenv from "dotenv"
dotenv.config()
import { diagnose } from "./diagnosis.js";

const userProfile1 = {
  age: 45,
  gender: "female",
  weight: 68,
  height: 165,
  smoking: "past",
  AlcoholPerWeek: 5,
  weeklyExercise: 1,
  sleepQuality: 2,
  stressLevel: 4,
};
const userSymptoms = [
  { name: "fatigue", severity: 4, duration: 10 },
  { name: "headache", severity: 3, duration: 5 },
  { name: "cough", severity: 2, duration: 2 },
];

const userProfile2 = {
  age: 35,
  gender: "male",
  weight: 71,
  height: 175,
  smoking: "past",
  AlcoholPerWeek: 9,
  weeklyExercise: 3,
  sleepQuality: 1,
  stressLevel: 5,
};
const userSymptoms2 = [
  { name: "stomach_ache", severity: 4, duration: 10 },
  { name: "vomiting", severity: 4, duration: 5 },
  { name: "headache", severity: 3, duration: 6 },
];


const result1 = await diagnose(userProfile1, userSymptoms);
console.log("Diagnosis for user 1", result1);
  const result2 = await diagnose(userProfile2, userSymptoms2);
  console.log("Diagnosis for user 2", result2);

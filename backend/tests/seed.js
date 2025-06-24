const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const users = [
  {
    id: "ckz9q3g8j0000jv5p6y7a2s1",
    createdAt: "2023-02-20T14:30:00.000Z",
    updatedAt: "2023-02-20T14:30:00.000Z",
    username: "johnDoe",
    password: "password123",
    medicalHistory: "Diabetes, High Blood Pressure",
    location: "New York, USA",
    age: 35,
    gender: "Male",
    symptomLogs: ["Headache", "Fatigue"],
    allergyLogs: ["Peanuts", "Shellfish"],
  },
  {
    id: "ckz9q3g8j0001jv5p6y7a2s2",
    createdAt: "2023-02-20T14:31:00.000Z",
    updatedAt: "2023-02-20T14:31:00.000Z",
    username: "janeDoe",
    password: "password456",
    medicalHistory: "Asthma, Allergies",
    location: "Los Angeles, USA",
    age: 28,
    gender: "Female",
    symptomLogs: ["Coughing", "Shortness of Breath"],
    allergyLogs: ["Dust Mites", "Pollens"],
  },
  {
    id: "ckz9q3g8j0002jv5p6y7a2s3",
    createdAt: "2023-02-20T14:32:00.000Z",
    updatedAt: "2023-02-20T14:32:00.000Z",
    username: "bobSmith",
    password: "password789",
    medicalHistory: "Heart Disease, High Cholesterol",
    location: "Chicago, USA",
    age: 42,
    gender: "Male",
    symptomLogs: ["Chest Pain", "Dizziness"],
    allergyLogs: ["Soy", "Gluten"],
  },
];

async function main() {
  console.log("Start seeding...");

  await prisma.user.deleteMany();

  for (const user of users) {
    const userRecord = await prisma.user({
      data: user,
    });
    console.log(`Created user with id:${userRecord.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

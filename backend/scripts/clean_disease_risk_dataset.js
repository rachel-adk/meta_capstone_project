const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputFilePath = path.join(__dirname, "../data/demographic_disease.csv");
const outputFilePath = path.join(
  __dirname,
  "../data/demographicsToDiseases.json"
);

const csvParser = require('csv-parser')
const demographicMap = {};

fs.createReadStream(inputFilePath)
  .pipe(csvParser())
  .on("data", (row) => {
    const disease = row.disease?.trim();
    const ageGroup = row.age_group?.trim().toLowerCase();
    const gender = row.gender?.trim().toLowerCase();
    const bmiCategory = row.bmi_category?.trim().toLowerCase();
    const riskScore = parseFloat(row.risk_score);

    if (!disease || isNaN(riskScore)) return;

    if (!demographicMap[disease]) {
      demographicMap[disease] = {};
    }

    const byAge = demographicMap[disease];
    if (!byAge[ageGroup]) {
      byAge[ageGroup] = {};
    }
    const byGender = byAge[ageGroup];
    if (!byGender[gender]) {
      byGender[gender] = {};
    }
    byGender[gender][bmiCategory] = riskScore;
  })

  .on("end", () => {
    fs.writeFileSync(outputFilePath, JSON.stringify(demographicMap, null, 2));
    console.log(`Cleaned data and saved to ${outputFilePath}`);
  });

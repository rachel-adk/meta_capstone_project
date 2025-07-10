const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputFilePath = path.join(__dirname, "../data/dataset.csv");
const outputFilePath = path.join(__dirname, "../data/conditions.json");

const conditionMap = {};

function cleanDataset() {
  fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on("data", (row) => {
      const condition = row["Disease"]?.trim().toLowerCase();

      const symptoms = Object.keys(row)
        .filter((key) => key.startsWith("Symptom") && row[key])
        .map((key) => row[key].trim().toLowerCase());

      const totalSymptoms = symptoms.length;
      const weights = {}
      symptoms.forEach((symptom, index) => {
        weights[symptom] = totalSymptoms - index
      })

      if (condition && symptoms.length > 0) {
        if (!conditionMap[condition]) {
          conditionMap[condition] = {
            condition,
            symptoms: [],
            symptomWeights: {},
          };
        }

        const data = conditionMap[condition];
        symptoms.forEach((symptom => {
            if (!data.symptoms.includes(symptom)) {
              data.symptoms.push(symptom);
            }
            data.symptomWeights[symptom] = weights[symptom]
          }))
        for (const symptom of symptoms) {
          if (!conditionMap[condition].symptoms.includes(symptom)) {
            conditionMap[condition].symptoms.push(symptom);
            conditionMap[condition].symptomWeights[symptom] = 1;
          }
        }
      }
    })

    .on("end", () => {
      const results = Object.values(conditionMap);
      fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2));
      console.log(`Cleaned data and saved to ${outputFilePath}`);
    });
}
cleanDataset();

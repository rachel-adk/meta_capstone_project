const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

const inputFilePath = path.join(__dirname, "disease_precaution.csv");
const outputFilePath = path.join(__dirname, "disease_precautions.json");

const diseasePrecautions = {};

function cleanDataset() {
  fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on("data", (row) => {
      const disease = row["Disease"]?.trim().toLowerCase();
      const precautions = Object.keys(row)
        .filter((key) => key.startsWith("Precaution") && row[key])
        .map((key) => row[key].trim().toLowerCase());

      if (disease && precautions.length > 0) {
        if (!diseasePrecautions[disease]) {
          diseasePrecautions[disease] = {
            disease,
            precautions: [],
          };
        }

        for (const precaution of precautions) {
          if (!diseasePrecautions[disease].precautions.includes(precaution)) {
            diseasePrecautions[disease].precautions.push(precaution);
          }
        }
      }
    })
    .on("end", () => {
      const results = Object.values(diseasePrecautions);
      fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2));
      console.log(`Cleaned dataset and saved to ${outputFilePath}`);
    });
}
cleanDataset();

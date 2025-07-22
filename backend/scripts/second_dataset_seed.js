require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.eventNames.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

async function seed() {
  const client = await pool.connect();
  try {
    const filePath = path.join(
      __dirname,
      "../data/demographicstoDiseases.json"
    );
    const demographics = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const text = `
            INSERT INTO "DemographicsToDiseases"
            (condition, agegroup, gender, bmicategory, prevalence)
            VALUES
                ($1, $2, $3, $4, $5)
            `;

    for (const [condition, byAge] of Object.entries(demographics)) {
      for (const [age, byGender] of Object.entries(byAge)) {
        for (const [gender, byBmi] of Object.entries(byGender))
          for (const [BmiCat, prev] of Object.entries(byBmi)) {
            await client.query(text, [condition, age, gender, BmiCat, prev]);
          }
      }
    }

    await client.query("COMMIT");
    console.log("Seed complete:", demographics.length);
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", err);
  } finally {
    client.release();
    pool.end();
  }
}
seed();

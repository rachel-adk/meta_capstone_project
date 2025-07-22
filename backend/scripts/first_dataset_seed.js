require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,

  connectionTimeoutMillis: 5000
});

async function seed() {
    console.log("connecting to...")
  const client = await pool.connect();
  try {
    const filePath = path.join(__dirname, '../data/conditions.json')
    const conditions = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    await client.query("BEGIN");
    await client.query('TRUNCATE medical_conditions CASCADE')

    const text = `
        INSERT INTO my_table
        (condition_name, symptoms, symptom_weights)
        VALUES
            ($1, $2, $3)
        `;
    for (const entry of conditions) {
      const { condition, symptoms, symptomWeights } = entry;
      await client.query(text, [condition, symptoms, symptomWeights]);
    }

    await client.query("COMMIT");
    console.log("Seed complete:", conditions.length);
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", err);
  } finally {
    client.release();
    pool.end();
  }
}
seed();

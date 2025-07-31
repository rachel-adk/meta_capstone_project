import dotenv from "dotenv"
dotenv.config()
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { Pool } from "pg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,

  connectionTimeoutMillis: 5000
});

async function seed() {
  const client = await pool.connect();
  try {
    const filePath = path.join(__dirname, '../data/conditions.json')
    const conditions = JSON.parse(fs.readFileSync(filePath, 'utf8'))

    const text = `
        INSERT INTO "Conditions"
        (condition, symptoms, symptomweights)
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

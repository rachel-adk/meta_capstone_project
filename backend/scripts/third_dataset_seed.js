import dotenv from "dotenv"
dotenv.config()
import fs from "fs"
import path from "path"
import { Pool } from "pg"
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const pool = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

async function seed() {
  const client = await pool.connect();
  try {
    const filePath = path.join(__dirname, "../data/disease_precautions.json");
    const precautions = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const text = `
        INSERT INTO "Precautions"
        (condition, precautions)
        VALUES
            ($1, $2)
        ON CONFLICT DO NOTHING
        `;
    for (const entry of precautions) {
      const { condition, precautions: precautionsList } = entry;
      if (typeof condition !== "string" || !Array.isArray(precautionsList)) {
        console.warn("Skipping invalid entry");
        continue;
      }
      await client.query(text, [condition, precautionsList]);
    }

    await client.query("COMMIT");
    console.log("Seed complete:", precautions.length);
  } catch (err) {
    await client.query("ROLLBACK");
    console.error("Seed failed:", err);
  } finally {
    client.release();
    pool.end();
  }
}
seed();

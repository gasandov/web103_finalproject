import pool from "../config/database.js";

import "../config/dotenv.js";

const createTableQuery = `
  DROP TABLE IF EXISTS categories CASCADE;

  CREATE TABLE IF NOT EXISTS categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )
`;

export default async () => {
  try {
    await pool.query(createTableQuery);
    console.log("categories table created");
  } catch (error) {
    console.error("categories table creation failed", error);
  }
};

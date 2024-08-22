import pool from "../config/database.js";

import "../config/dotenv.js";

const createTableQuery = `
  DROP TABLE IF EXISTS accounts CASCADE;

  CREATE TABLE IF NOT EXISTS accounts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(45) NOT NULL,
    balance NUMERIC(10, 2) NOT NULL,
    last4 VARCHAR(4) NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )
`;

export default async () => {
  try {
    await pool.query(createTableQuery);
    console.log("accounts table created");
  } catch (error) {
    console.error("accounts table creation failed", error);
  }
};

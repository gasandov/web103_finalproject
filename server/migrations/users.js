import pool from "../config/database.js";

import "../config/dotenv.js";

const createTableQuery = `
  CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

  DROP TABLE IF EXISTS users CASCADE;

  CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(128) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )
`;

export default async () => {
  try {
    await pool.query(createTableQuery);
    console.log("users table created");
  } catch (error) {
    console.error("users table creation failed", error);
  }
};

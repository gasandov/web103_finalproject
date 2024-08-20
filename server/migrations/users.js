import pool from "../config/database.js";

import "../config/dotenv.js";

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    user_type VARCHAR(255) NOT NULL CHECK (user_type IN ('seller', 'buyer'))
  );
`;

export default async () => {
  try {
    await pool.query(createTableQuery);
    console.log("users table created");
  } catch (error) {
    console.error("users table creation failed", error);
  }
};

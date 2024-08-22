import pool from "../config/database.js";

import "../config/dotenv.js";

const createTableQuery = `
  DROP TABLE IF EXISTS expenses CASCADE;

  CREATE TABLE IF NOT EXISTS expenses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(128) NOT NULL,
    description VARCHAR(128) NULL,
    amount NUMERIC(10, 2) NOT NULL,
    date DATE NOT NULL,
    tags JSON,
    user_id UUID NULL,
    category_id UUID NULL,
    account_id UUID NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE,
    FOREIGN KEY (account_id) REFERENCES accounts(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
  )
`;

export default async () => {
  try {
    await pool.query(createTableQuery);
    console.log("expenses table created");
  } catch (error) {
    console.error("expenses table creation failed", error);
  }
};

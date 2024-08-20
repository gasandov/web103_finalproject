import pool from "../config/database.js";

import "../config/dotenv.js";

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    description TEXT NOT NULL,
    image_url TEXT NOT NULL,
    quantity INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id)
  );
`;

export default async () => {
  try {
    await pool.query(createTableQuery);
    console.log("products table created");
  } catch (error) {
    console.error("products table creation failed", error);
  }
};

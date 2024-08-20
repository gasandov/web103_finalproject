import pool from "../config/database.js";

export const getSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

    if (user.rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    const newUser = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [name, email]
    );

    res.status(201).json(newUser.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const userProducts = await pool.query(
      "SELECT * FROM products WHERE user_id = $1",
      [id]
    );

    if (userProducts.rows.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json(userProducts.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

import pool from "../config/database.js";

export const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await pool.query(
      "SELECT * FROM categories WHERE id = $1",
      [id]
    );

    if (category.rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(category.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await pool.query("SELECT * FROM categories");

    if (categories.rows.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.json(categories.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = await pool.query(
      "INSERT INTO categories (name) VALUES ($1) RETURNING *",
      [name]
    );

    res.status(201).json(newCategory.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCategory = await pool.query(
      "DELETE FROM categories WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedCategory.rows.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(deletedCategory.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

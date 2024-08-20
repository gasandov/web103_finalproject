import pool from "../config/database.js";

export const getSingleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await pool.query("SELECT * FROM products WHERE id = $1", [
      id,
    ]);

    if (product.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM products");

    if (products.rows.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    res.json(products.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const newProduct = await pool.query(
      "INSERT INTO products (name, description, price) VALUES ($1, $2, $3) RETURNING *",
      [name, description, price]
    );

    res.status(201).json(newProduct.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const updatedProduct = await pool.query(
      "UPDATE products SET name = $1, description = $2, price = $3 WHERE id = $4 RETURNING *",
      [name, description, price, id]
    );

    if (updatedProduct.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedProduct.rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(deletedProduct.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

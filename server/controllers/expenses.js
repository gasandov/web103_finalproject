import pool from "../config/database.js";

export const getSingleExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await pool.query("SELECT * FROM expenses WHERE id = $1", [
      id,
    ]);

    if (expense.rows.length === 0) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json(expense.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getExpenses = async (_, res) => {
  try {
    const expenses = await pool.query(`
      SELECT date, jsonb_agg(jsonb_build_object('id', id, 'name', name, 'amount', amount, 'description', description)) as expenses
      FROM expenses
      GROUP BY date
      ORDER BY date ASC
    `);

    if (expenses.rows.length === 0) {
      return res.status(404).json({ message: "No expenses found" });
    }

    res.json(expenses.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createExpense = async (req, res) => {
  try {
    const {
      name,
      description,
      amount,
      date = new Date().toUTCString(),
      tags,
      userId = null,
      accountId = null,
      categoryId = null,
    } = req.body;

    console.log();

    const newExpense = await pool.query(
      "INSERT INTO expenses (name, description, amount, date, tags, user_id, account_id, category_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [name, description, amount, date, tags, userId, accountId, categoryId]
    );

    res.status(201).json(newExpense.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedExpense = await pool.query(
      "DELETE FROM expenses WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedExpense.rows.length === 0) {
      return res.status(404).json({ message: "Expense not found" });
    }

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

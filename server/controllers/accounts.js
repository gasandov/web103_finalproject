import pool from "../config/database.js";

export const getSingleAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const account = await pool.query("SELECT * FROM accounts WHERE id = $1", [
      id,
    ]);

    if (account.rows.length === 0) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json(account.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAccounts = async (req, res) => {
  try {
    const accounts = await pool.query("SELECT * FROM accounts");

    if (accounts.rows.length === 0) {
      return res.status(404).json({ message: "No accounts found" });
    }

    res.json(accounts.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createAccount = async (req, res) => {
  try {
    const { name, balance = 0, last4 = null } = req.body;

    const newAccount = await pool.query(
      "INSERT INTO accounts (name, balance, last4) VALUES ($1, $2, $3) RETURNING *",
      [name, balance, last4]
    );

    res.status(201).json(newAccount.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAccount = await pool.query(
      "DELETE FROM accounts WHERE id = $1 RETURNING *",
      [id]
    );

    if (deletedAccount.rows.length === 0) {
      return res.status(404).json({ message: "Account not found" });
    }

    res.json(deletedAccount.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

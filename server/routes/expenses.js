import { Router } from "express";

import {
  createExpense,
  deleteExpense,
  getExpenses,
  getSingleExpense,
} from "../controllers/expenses.js";

const router = Router();

router.get("/", getExpenses);
router.post("/", createExpense);

router.get("/:id", getSingleExpense);
router.delete("/:id", deleteExpense);

export default router;

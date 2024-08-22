import { Router } from "express";

import {
  createAccount,
  deleteAccount,
  getAccounts,
  getSingleAccount,
} from "../controllers/accounts.js";

const router = Router();

router.get("/", getAccounts);
router.post("/", createAccount);

router.get("/:id", getSingleAccount);
router.delete("/:id", deleteAccount);

export default router;

import { Router } from "express";

import {
  createCategory,
  deleteCategory,
  getCategories,
  getSingleCategory,
} from "../controllers/categories.js";

const router = Router();

router.get("/", getCategories);
router.post("/", createCategory);

router.get("/:id", getSingleCategory);
router.delete("/:id", deleteCategory);

export default router;

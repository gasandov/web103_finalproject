import { Router } from "express";

import {
  createUser,
  getSingleUser,
  getUserProducts,
} from "../controllers/users.js";

const router = Router();

router.post("/", createUser);

router.get("/:id", getSingleUser);

router.get("/:id/products", getUserProducts);

export default router;

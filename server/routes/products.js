import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/products.js";

const router = Router();

router.get("/", getProducts);
router.post("/", createProduct);

router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;

import { Router } from "express";

import { createUser, getSingleUser } from "../controllers/users.js";

const router = Router();

router.post("/", createUser);

router.get("/:id", getSingleUser);

export default router;

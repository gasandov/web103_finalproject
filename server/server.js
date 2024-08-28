import cors from "cors";
import express from "express";
import helmet from "helmet";

import "./config/dotenv.js";

import accountsRoute from "./routes/accounts.js";
import categoriesRoute from "./routes/categories.js";
import expensesRoute from "./routes/expenses.js";
import usersRoute from "./routes/users.js";

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api/users", usersRoute);
app.use("/api/expenses", expensesRoute);
app.use("/api/accounts", accountsRoute);
app.use("/api/categories", categoriesRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

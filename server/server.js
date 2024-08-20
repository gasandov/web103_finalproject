import express from "express";

import "./config/dotenv.js";

import cartsRoute from "./routes/carts.js";
import productsRoute from "./routes/products.js";
import usersRoute from "./routes/users.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/carts", cartsRoute);
app.use("/api/users", usersRoute);
app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

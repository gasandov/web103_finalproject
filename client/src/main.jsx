import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Expenses from "./routes/expenses";
import ExpensesCreate from "./routes/expenses-create";
import Root from "./routes/root";

import ErrorPage from "./error-page";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "expenses/create",
        element: <ExpensesCreate />,
      },
      {
        path: "expenses",
        element: <Expenses />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

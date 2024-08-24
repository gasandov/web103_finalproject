import { useEffect, useState } from "react";
import expensesAPI from "../../../services/expenses-api";

export default function ExpensesList() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const { data } = await expensesAPI.get("/expenses");
        setExpenses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExpenses();
  }, []);

  return (
    <div>
      <h1>Expenses List</h1>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <p>{expense.name}</p>
        </li>
      ))}
    </div>
  );
}

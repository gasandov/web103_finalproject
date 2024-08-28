import { formatDate } from "date-fns";
import { useEffect, useState } from "react";

import expensesAPI from "../../../services/expenses-api";

import { Button } from "../../atoms/Button";
import { ExpenseCard } from "../../atoms/ExpenseCard";

export default function ExpensesList() {
  const [groupedExpenses, setGroupedExpenses] = useState([]);

  const handleDelete = async (id) => {
    try {
      await expensesAPI.delete(`/expenses/${id}`);

      const { data } = await expensesAPI.get("/expenses");

      setGroupedExpenses(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchExpenses = async () => {
      try {
        const { data } = await expensesAPI.get("/expenses", { signal });

        setGroupedExpenses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchExpenses();

    return () => controller.abort();
  }, []);

  return (
    <div className="p-4 border flex flex-col gap-y-4 m-6 rounded-md">
      <h1 className="text-lg font-extrabold">Expenses List</h1>
      <ul className="flex flex-col gap-y-4">
        {groupedExpenses.map((group) => (
          <li key={group.date} className="flex flex-col gap-y-1">
            <h2 className="text-md font-semibold">
              {formatDate(new Date(group.date), "PP")}
            </h2>
            <ul className="flex flex-col gap-y-2">
              {group.expenses.map((expense) => (
                <ExpenseCard
                  key={expense.id}
                  expense={expense}
                  onDelete={handleDelete}
                />
              ))}
            </ul>
          </li>
        ))}
        <Button>Add new expense</Button>
      </ul>
    </div>
  );
}

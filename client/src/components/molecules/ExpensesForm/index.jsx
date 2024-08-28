import { useState } from "react";

import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

import expensesAPI from "../../../services/expenses-api";

const defaultFormData = {
  tags: "",
  name: "",
  date: "",
  amount: 0,
  accountId: "",
  categoryId: "",
  description: "",
};

export default function ExpensesForm() {
  const [formData, setFormData] = useState(defaultFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await expensesAPI.post("/expenses", formData);
      setFormData(defaultFormData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 border flex flex-col gap-y-4 rounded-md max-w-xl my-6 mx-auto"
    >
      <Input
        name="name"
        label="Name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Expense Name"
      />
      <Input
        name="description"
        label="Description"
        onChange={handleChange}
        value={formData.description}
        placeholder="Expense Description"
      />
      <Input
        type="number"
        name="amount"
        label="Amount"
        onChange={handleChange}
        value={formData.amount}
        placeholder="0.00"
      />
      <Input
        type="date"
        name="date"
        label="Date"
        onChange={handleChange}
        value={formData.date}
        placeholder="Date"
      />
      <Button>Add Expense</Button>
    </form>
  );
}

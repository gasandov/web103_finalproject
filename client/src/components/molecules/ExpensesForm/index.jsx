import { useState } from "react";

import { Input } from "../../elements/Input";

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
    <form onSubmit={handleSubmit}>
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
        value={formData.categoryId}
        placeholder="Date"
      />
      <button className="button">Add Expense</button>
    </form>
  );
}

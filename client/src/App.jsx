import "./App.css";

import ExpensesForm from "./components/molecules/ExpensesForm";
import ExpensesList from "./components/molecules/ExpensesList";

function App() {
  return (
    <main>
      <ExpensesForm />
      <ExpensesList />
    </main>
  );
}

export default App;

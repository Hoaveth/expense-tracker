import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";

interface Expenses {
  name: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);

  const handleAddExpenses = (data: Expenses) => {
    setExpenses([...expenses, { ...data }]);
  };

  return (
    <div className="App">
      <Form handleAddExpenses={handleAddExpenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;

import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseList/ExpenseFilter";

interface Expenses {
  name: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const categories = ["Food", "Clothing", "Others"];

  const handleAddExpenses = (data: Expenses) => {
    setExpenses([...expenses, { ...data }]);
  };

  const handleSetActiveCategory = (data: string) => {
    setActiveCategory(data);
  };

  const filteredCategories = activeCategory
    ? expenses.filter((expense) => expense.category === activeCategory)
    : expenses;

  return (
    <div className="App">
      <Form handleAddExpenses={handleAddExpenses} categories={categories} />
      <ExpenseFilter
        categories={categories}
        handleSetActiveCategory={handleSetActiveCategory}
      />
      <ExpenseList expenses={filteredCategories} />
    </div>
  );
}

export default App;

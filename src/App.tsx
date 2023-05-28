import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import categories from "./categories";

interface Expenses {
  name: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("");

  const handleAddExpenses = (data: Expenses) => {
    setExpenses([...expenses, { ...data }]);
  };

  const handleSetActiveCategory = (data: string) => {
    setActiveCategory(data);
  };

  const handleDeleteExpense = (deleteIndex: number) => {
    setExpenses((prevState) =>
      prevState.filter((_, index) => index !== deleteIndex)
    );
  };

  const filteredCategories = activeCategory
    ? expenses.filter((expense) => expense.category === activeCategory)
    : expenses;

  return (
    <div className="App">
      <div className="mb-5">
        <Form handleAddExpenses={handleAddExpenses} />
      </div>
      <div className="mb-3">
        <ExpenseFilter handleSetActiveCategory={handleSetActiveCategory} />
      </div>
      <ExpenseList
        expenses={filteredCategories}
        handleDeleteExpense={handleDeleteExpense}
      />
    </div>
  );
}

export default App;

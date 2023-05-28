import { useState } from "react";
import Form from "./components/Form";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import categories from "./categories";

interface Expense {
  id: number;
  name: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [activeCategory, setActiveCategory] = useState("");

  const handleSetActiveCategory = (data: string) => {
    setActiveCategory(data);
  };

  const handleDeleteExpense = (id: number) => {
    setExpenses((prevState) =>
      prevState.filter((expense) => expense.id !== id)
    );
  };

  const filteredCategories = activeCategory
    ? expenses.filter((expense) => expense.category === activeCategory)
    : expenses;

  return (
    <div className="App">
      <div className="mb-5">
        <Form
          handleAddExpenses={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
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

import { useState } from "react";
import Form from "./components/Form";

interface Expenses {
  name: string;
  amount: number;
  category: string;
}

function App() {
  const [expenses, setExpenses] = useState<Expenses[]>([]);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;

import React from "react";

interface Expenses {
  name: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[];
}

const ExpenseList = ({ expenses }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.name}>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;

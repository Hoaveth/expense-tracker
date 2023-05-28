import React from "react";

interface Expenses {
  name: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[];
  handleDeleteExpense: (index: number) => void;
}

const ExpenseList = ({ expenses, handleDeleteExpense }: Props) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteExpense(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;

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
  let total = 0;
  return (
    <table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense, index) => {
          total += expense.amount;
          return (
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
          );
        })}
      </tbody>
      {total ? (
        <tfoot>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>
              <strong>${total}</strong>
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      ) : null}
    </table>
  );
};

export default ExpenseList;

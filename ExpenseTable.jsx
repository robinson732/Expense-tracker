import React from 'react';

function ExpenseTable({ expenses }) {
  return (
    <table border="1" cellPadding="8" width="100%">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {expenses.length === 0 ? (
          <tr><td colSpan="4" align="center">No expenses</td></tr>
        ) : (
          expenses.map((expense, i) => (
            <tr key={i}>
              <td>{expense.title}</td>
              <td>{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default ExpenseTable;


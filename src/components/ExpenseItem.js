import React from 'react';
import { Button } from '@mui/material';
import '../styles/ExpenseItem.css';

const ExpenseItem = ({ expense, deleteExpense }) => {
  return (
    <div className="expense-item">
      <div className="expense-info">
        <h3>{expense.title}</h3>
        <p>${expense.amount}</p>
        <span className={`category ${expense.category.toLowerCase()}`}>{expense.category}</span>
      </div>
      <Button
        variant="outlined"
        color="error"
        onClick={() => deleteExpense(expense.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default ExpenseItem;

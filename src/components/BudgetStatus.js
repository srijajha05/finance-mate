import React from 'react';
import '../styles/BudgetStatus.css';

const BudgetStatus = ({ budget, expenses }) => {
  const totalSpent = expenses.reduce((total, expense) => total + expense.amount, 0);
  const remaining = budget - totalSpent;

  return (
    <div className="budget-status">
      <h2>Budget Status</h2>
      <p>Budget: ₹{budget.toFixed(2)}</p>
      <p>Spent: ₹{totalSpent.toFixed(2)}</p>
      <p>Remaining: ₹{remaining.toFixed(2)}</p>
      {remaining < 0 && <p className="alert">You are over budget!</p>}
    </div>
  );
};

export default BudgetStatus;

import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../styles/BudgetForm.css';

const BudgetForm = ({ updateBudget }) => {
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBudget(parseFloat(budget));
    setBudget('');
  };

  return (
    <form className="budget-form" onSubmit={handleSubmit}>
      <TextField
        label="Monthly Budget"
        type="number"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Update Budget</Button>
    </form>
  );
};

export default BudgetForm;

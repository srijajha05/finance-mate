import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import '../styles/ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      category
    };
    addExpense(newExpense);
    setTitle('');
    setAmount('');
    setCategory('Food');
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <TextField
        label="Category"
        select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        SelectProps={{ native: true }}
      >
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Others">Others</option>
      </TextField>
      <Button type="submit" variant="contained">Add Expense</Button>
    </form>
  );
};

export default ExpenseForm;

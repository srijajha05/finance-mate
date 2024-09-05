import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetForm from './components/BudgetForm';
import BudgetStatus from './components/BudgetStatus';
import ExpenseChart from './components/ExpenseChart';
import './styles/App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem('expenses')) || [];
    const savedBudget = JSON.parse(localStorage.getItem('budget')) || 0;
    setExpenses(savedExpenses);
    setBudget(savedBudget);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
    localStorage.setItem('budget', JSON.stringify(budget));
  }, [expenses, budget]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
  };

  return (
    <div className="App">
      <Header />
      <ExpenseForm addExpense={addExpense} />
      <BudgetForm updateBudget={updateBudget} />
      <BudgetStatus budget={budget} expenses={expenses} />
      <ExpenseList expenses={expenses} deleteExpense={deleteExpense} />
      <ExpenseChart expenses={expenses} />
    </div>
  );
}

export default App;

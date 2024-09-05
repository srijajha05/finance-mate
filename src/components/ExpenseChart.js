import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import '../styles/ExpenseChart.css';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const ExpenseChart = ({ expenses }) => {
  const categories = ['Food', 'Transport', 'Entertainment', 'Others'];
  const data = {
    labels: categories,
    datasets: [{
      data: categories.map(category => 
        expenses
          .filter(expense => expense.category === category)
          .reduce((total, expense) => total + expense.amount, 0)
      ),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E0E0E0'],
    }]
  };

  return (
    <div className="expense-chart">
      <h2>Expense Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default ExpenseChart;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import './App.css'

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(res => setTransactions(res.data));
  }, []);

  const addTransaction = async (title, amount) => {
    const res = await axios.post('http://localhost/api/transactions', { title, amount });
    setTransactions([res.data, ...transactions]);
  }

  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expanse = transactions
    .filter(t => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <h2> Balance: ${income + expense}</h2>
      <h3>Income: ${income} | Expenses: ${Math.abs(expense)}</h3>
      <TransactionForm onAdd={addTransaction} />
      <TransactionList transactions={transactions} />

    </div>
  )
}

export default App;

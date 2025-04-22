import React, { useState } from 'react';

function TransactionForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount) return;
        onAdd(title || parseFloat(amount));
        setTitle('');
        setAmount('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Enter title" />
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Enter amount" />
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;
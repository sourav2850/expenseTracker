import React from 'react';

function TransactionList({ transactions }) {
    return (
        <ul>
            {transactions.map(t => (
                <li key={t._id}>
                    {t.title} -${t.amount}
                </li>
            ))}
        </ul>
    );
}

export default TransactionList;
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/expense-tracker', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const transactionSchema = new mongoose.Schema({
    title: String,
    amount: Number,
    date: { type: Date, default: Date.now }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

app.get('/api/transactions', async (req, res) => {
    const transactions = await Transaction.find.sort({ date: -1 });
    res.json(transactions);
})

app.post('/api/transactions', async (req, res) => {
    const { title, amount } = req.body;
    const newTransaction = new Transaction({ title, amount });
    await newTransaction.save();
    res.json(newTransaction);
});

app.listen(5000, () => console.log('Server running on port 5000'));
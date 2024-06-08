// controllers/expenseController.js
const Expense = require('../models/expense');

// Create a new expense
exports.createExpense = async (req, res) => {
    try {
        const { description, amount,date  } = req.body;
        const newExpense = await Expense.create({ description, amount,date});
        res.status(201).json(newExpense);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all expenses
exports.getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an expense
exports.deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.findByPk(id);
        if (expense) {
            await expense.destroy();
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Expense not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Edit an expense [Bonus Task]
exports.updateExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, amount, date } = req.body;
        const expense = await Expense.findByPk(id);
        if (expense) {
            expense.description = description;
            expense.amount = amount;
            expense.date = date;
            await expense.save();
            res.status(200).json(expense);
        } else {
            res.status(404).json({ error: 'Expense not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

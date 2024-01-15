// routes/expenses.js
const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

// Route to display all expenses
router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.render('expenses/index', { expenses });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to display the form for adding a new expense
router.get('/expenses/new', (req, res) => {
  res.render('expenses/new');
});

// Route to handle adding a new expense
router.post('/expenses', async (req, res) => {
  try {
    await Expense.create(req.body);
    res.redirect('/expenses');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

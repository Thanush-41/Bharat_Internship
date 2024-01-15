// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenses');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Thanush:Thanush@money.58nygja.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use expense routes
app.use(expenseRoutes);

// Define a basic route for testing
app.get('/', (req, res) => {
  res.send('Money Tracker App');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

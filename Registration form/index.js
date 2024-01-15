const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const registrationRoutes = require('./routes/tasks'); // Adjust the path as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://Thanush:<password>@reg.ytevula.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set up routes
app.use('/', registrationRoutes); // Adjust the path as needed

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on http://localhost: ${PORT}")});
const express = require('express');
const Registration = require('../models/Task');

const router = express.Router();

// Route to handle registration
router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Create a new registration document
    const newRegistration = new Registration({
      firstName,
      lastName,
      email,
      password,
    });

    // Save the registration data to the database
    await newRegistration.save();

    res.status(201).json({ message: 'Registration successful!' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Registration failed. Please try again.', error: error.message });
  }
});

module.exports = router;

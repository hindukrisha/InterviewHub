const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const SupportMessage = require('../models/SupportMessage');

// API Route to handle support messages
router.post(
  '/support',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('message').notEmpty().withMessage('Message is required')
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { name, email, message } = req.body;
      const newMessage = new SupportMessage({ name, email, message });
      await newMessage.save();
      res.status(201).json({ success: true, message: 'Support request submitted successfully!' });
    } catch (error) {
      res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
    }
  }
);

module.exports = router;

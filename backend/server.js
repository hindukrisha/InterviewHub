const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = process.env.PORT || 5000;

// Load environment variables from .env file
dotenv.config();

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Import Models
const Interview = require('./models/Interview');
const SupportMessage = require('./models/SupportMessage');

// Import mockInterviewRoutes
const mockInterviewRoutes = require('./routes/mockInterviewRoutes');

// Pagination Utility
const paginate = (req) => {
  const limit = parseInt(req.query.limit) || 10; // Default limit: 10
  const page = parseInt(req.query.page) || 1;    // Default page: 1
  return { limit, skip: (page - 1) * limit };
};

// Route to fetch all interviews (Home)
app.get('/api/home', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const interviews = await Interview.find()
      .sort({ createdAt: -1 }) // Sort by newest interviews first
      .skip(skip)
      .limit(limit);
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch interviews' });
  }
});

// Route to fetch IT interviews
app.get('/api/it', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const interviews = await Interview.find({ it: 'yes' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch IT interviews' });
  }
});

// Route to fetch Non-IT interviews
app.get('/api/nonit', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const interviews = await Interview.find({ nonit: 'yes' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Non-IT interviews' });
  }
});

// Route to fetch MNC interviews
app.get('/api/mnc', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const interviews = await Interview.find({ mnc: 'yes' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch MNC interviews' });
  }
});

// Route to fetch Startup interviews
app.get('/api/startup', async (req, res) => {
  const { limit, skip } = paginate(req);
  try {
    const interviews = await Interview.find({ startup: 'yes' })
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch Startup interviews' });
  }
});

// Route to fetch a specific interview by ID
app.get('/api/interview/:id', async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview) {
      return res.status(404).json({ message: 'Interview not found' });
    }
    res.json(interview);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching interview details' });
  }
});

// Feedback route
app.post('/feedback', (req, res) => {
  console.log("Received feedback:", req.body); // Debugging
  if (!req.body.name || !req.body.email || !req.body.message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }
  res.json({ success: true, message: "Feedback submitted!" });
});

// SupportForm API
app.post('/api/support', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }
    const newSupportMessage = new SupportMessage({ name, email, message });
    await newSupportMessage.save();
    res.json({ success: true, message: "Your message has been sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

// Use mockInterviewRoutes
app.use('/api', mockInterviewRoutes);

// Server listening
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port: ${port}`);
});

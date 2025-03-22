const Interview = require('../models/Interview');

// Get all interviews
const getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ message: "Error fetching interviews", error: err });
  }
};

// Get interviews based on category
const getInterviewsByCategory = async (req, res) => {
  const { category } = req.params;
  try {
    const interviews = await Interview.find({ [category]: { $ne: "" } });
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ message: `Error fetching ${category} interviews`, error: err });
  }
};

// Get interview details by ID
const getInterviewDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const interview = await Interview.findById(id);
    if (!interview) {
      return res.status(404).json({ message: "Interview not found" });
    }
    res.json(interview);
  } catch (err) {
    res.status(500).json({ message: "Error fetching interview details", error: err });
  }
};

module.exports = {
  getAllInterviews,
  getInterviewsByCategory,
  getInterviewDetails
};

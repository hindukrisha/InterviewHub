const express = require("express");
const router = express.Router();
const MockInterview = require("../models/MockInterview");

// Route to get all mock interviews
router.get("/mock-interviews", async (req, res) => {
  try {
    const mockInterviews = await MockInterview.find();
    res.json(mockInterviews);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch mock interviews" });
  }
});

module.exports = router;

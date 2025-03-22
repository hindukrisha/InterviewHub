const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

// Route for fetching all interviews
router.get('/interviews', interviewController.getAllInterviews);

// Route for fetching interviews by category
router.get('/interviews/:category', interviewController.getInterviewsByCategory);

// Route for fetching interview details by ID
router.get('/interview/:id', interviewController.getInterviewDetails);

module.exports = router;

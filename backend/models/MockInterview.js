const mongoose = require('mongoose');

const MockInterviewSchema = new mongoose.Schema({
  title: String,
  questions: [String], // Array of questions
  difficulty: String,  // Beginner, Intermediate, Advanced
}, { timestamps: true });

module.exports = mongoose.model('MockInterview', MockInterviewSchema);

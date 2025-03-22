// backend/models/Interview.js
const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema(
  {
    companyName: { type: String, required: true }, // Added company name
    companyImage: { type: String, required: true }, // Added company image
    title: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    it: { type: String, default: "" },
    nonit: { type: String, default: "" },
    mnc: { type: String, default: "" },
    startup: { type: String, default: "" },
    questions: [
      {
        heading: { type: String, required: true },
        content: { type: String, required: true },
        answer: { type: String, required: true }, // Added answer field
      },
    ],
    syllabus: [
      {
        section: { type: String, required: true }, // Added syllabus
        topics: { type: String, required: true },
      },
    ],
    hiringProcess: [
      {
        stage: { type: String, required: true }, // Added hiring process
        details: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Interview", interviewSchema);

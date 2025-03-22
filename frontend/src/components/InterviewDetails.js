import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/InterviewDetails.css";

const InterviewDetails = () => {
  const { id } = useParams();
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInterviewDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/interview/${id}`);
        setInterview(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch interview details");
        setLoading(false);
      }
    };
    fetchInterviewDetails();
  }, [id]);

  if (loading) return <p className="loading-message">Loading...</p>;
  if (error) return <p className="error-message">{error}</p>;

  return (
    <div className="details-container">
      {/* Company Name */}
      <h1 className="details-title">{interview.companyName}</h1>

      {/* Company Image */}
      <div className="details-image-wrapper">
        <img src={interview.companyImage} alt={interview.companyName} className="details-image" />
      </div>

      {/* Interview Questions & Answers */}
      <div className="questions-section">
        <h2 className="questions-heading">Interview Questions & Answers:</h2>
        <ul className="questions-list">
          {interview.questions.map((question, index) => (
            <li key={question._id || index} className="question-card">
              <strong className="question-title">{question.heading}</strong>
              <p className="question-content">{question.content}</p>
              <p className="answer-content"><strong>Answer:</strong> {question.answer}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Syllabus Section (Table Format) */}
      <div className="table-container">
        <h2 className="table-heading">Syllabus</h2>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Section</th>
              <th>Topics Covered</th>
            </tr>
          </thead>
          <tbody>
            {interview.syllabus.map((item, index) => (
              <tr key={index}>
                <td>{item.section}</td>
                <td>{item.topics}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Hiring Process Section (Table Format) */}
      <div className="table-container">
        <h2 className="table-heading">Hiring Process</h2>
        <table className="responsive-table">
          <thead>
            <tr>
              <th>Stage</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {interview.hiringProcess.map((step, index) => (
              <tr key={index}>
                <td>{step.stage}</td>
                <td>{step.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InterviewDetails;

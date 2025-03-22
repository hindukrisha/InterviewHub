import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Home.css"; // Reusing the same styles

const InterviewList = ({ apiEndpoint, title }) => {
  const [interviews, setInterviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/${apiEndpoint}`);
        setInterviews(response.data);
      } catch (err) {
        console.error("Failed to fetch interviews", err);
      }
    };
    fetchInterviews();
  }, [apiEndpoint]);

  const handleCardClick = (id) => {
    navigate(`/interview/${id}`);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">{title} Interviews</h1>
      <div className="interview-grid">
        {interviews.map((interview) => (
          <div key={interview._id} className="interview-card" onClick={() => handleCardClick(interview._id)}>
            {/* Image */}
            <div className="interview-image-container">
              <img src={interview.image} alt={interview.title} className="interview-image" />
            </div>
            {/* Content */}
            <div className="interview-content">
              <h2 className="interview-title">{interview.title}</h2>
              <p className="interview-category">{interview.category}</p>
              <a href={`/interview/${interview._id}`} className="interview-link">Interview Questions</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewList;

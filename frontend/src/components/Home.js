import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Home.css';  // Assuming your styles are in this folder

const Home = () => {
  const [interviews, setInterviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterviews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/home?page=1&limit=10');
        setInterviews(response.data);
      } catch (err) {
        console.error("Failed to fetch interviews", err);
      }
    };
    fetchInterviews();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/interview/${id}`);
  };

  return (
    <div className="home-container">
      <h1 className="home-title">All Interviews</h1>
      <div className="interview-grid">
        {interviews.map(interview => (
          <div 
            key={interview._id} 
            className="interview-card" 
            onClick={() => handleCardClick(interview._id)}
          >
            {/* First half contains the image */}
            <div className="interview-image-container">
              <img src={interview.image} alt={interview.title} className="interview-image" />
            </div>
            {/* Second half contains the text content below the image */}
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

export default Home;

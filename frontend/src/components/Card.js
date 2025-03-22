// frontend/src/components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Card.css'; // Adjust the path if needed

const Card = ({ interview }) => (
  <div className="card">
    <img src={interview.image} alt={interview.title} />
    <h2>{interview.title}</h2>
    <Link to={`/interview/${interview._id}`}>View Details</Link>
  </div>
);

export default Card;

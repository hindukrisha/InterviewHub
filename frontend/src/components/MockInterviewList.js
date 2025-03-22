import React, { useEffect, useState } from "react";

const MockInterviewList = () => {
  const [mockInterviews, setMockInterviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/mock-interviews") // API URL
      .then((res) => res.json())
      .then((data) => setMockInterviews(data))
      .catch((err) => console.error("Error fetching mock interviews:", err));
  }, []);

  return (
    <div>
      <h2>Mock Interviews</h2>
      <ul>
        {mockInterviews.map((mock) => (
          <li key={mock._id}>
            <h3>{mock.title}</h3>
            <p>Difficulty: {mock.difficulty}</p>
            <ul>
              {mock.questions.map((q, index) => (
                <li key={index}>{q}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MockInterviewList;

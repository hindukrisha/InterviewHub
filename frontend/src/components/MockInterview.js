import React, { useState } from 'react';
import axios from 'axios';

const MockInterview = () => {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/mockinterviews/start', { question });
      setResponse(res.data.answer);
    } catch (error) {
      setResponse('Error generating response. Try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h2>AI Mock Interview</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="Ask an interview question" />
        <button type="submit">Ask AI</button>
      </form>
      {loading && <p>Loading...</p>}
      {response && <div className="response-box">{response}</div>}
    </div>
  );
};

export default MockInterview;

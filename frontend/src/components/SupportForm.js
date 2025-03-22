import '../styles/Support.css';
import React, { useState } from 'react';
import axios from 'axios';

const SupportForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/support`, formData);
      if (response.data.success) {
        setStatus('Your message has been sent successfully!');
        setTimeout(() => setStatus(''), 5000); // Hide message after 5 seconds

        // Reset form fields
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      setStatus('Error submitting the message. Please try again.');
    }
  };

  return (
    <div className="support-container">
      <h1 className="Supporth1">Need Help? Contact Us</h1>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit">Submit</button>
        {status && <p className="status-message">{status}</p>}
      </form>
    </div>
  );
};

export default SupportForm;

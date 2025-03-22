import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Information</h1>
      <table className="contact-table">
        <tbody>
          <tr>
            <th>Email:</th>
            <td><a href="mailto:hi@InterviewHub.co">hi@InterviewHub.co</a></td>
          </tr>
          <tr>
            <th>Phone:</th>
            <td>(832) 498-7369</td>
          </tr>
          <tr>
            <th>Website:</th>
            <td><a href="https://www.ihubhouston.com/" target="_blank" rel="noopener noreferrer">www.ihubhouston.com</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Contact;

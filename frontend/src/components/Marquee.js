// components/MarqueeComponent.js
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Marquee from 'react-fast-marquee';
import '../styles/Marquee.css'; // Import the CSS file

const MarqueeComponent = () => (
  // <!-- Marquee Section -->
    <section id="marquee">
        <div class="marquee-content">
            <span>Welcome to InterviewHub! Your go-to platform for preparing interviews.</span>
            <span>Explore IT, Non-IT, MNC, and Startup interviews with real questions and answers!</span>
            <span>Stay ahead in your job search with InterviewHub!</span>
        </div>
    </section>
);

export default MarqueeComponent;

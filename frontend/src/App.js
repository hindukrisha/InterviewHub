import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import InterviewDetails from './components/InterviewDetails';
import It from './components/It';
import Nonit from './components/Nonit';
import Mnc from './components/Mnc';
import Startup from './components/Startup';
import Footer from './components/Footer';
import MarqueeComponent from './components/Marquee'; // Scrolling text
import SupportForm from './components/SupportForm';
import Contact from './components/Contact';
import About from './components/About';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import MockInterview from './components/MockInterview'; // Import MockInterview

const App = () => (
  <Router>
    <Navbar />
    <MarqueeComponent /> {/* Scrolling announcements */}
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/interview/:id" element={<InterviewDetails />} />
      <Route path="/it" element={<It />} />
      <Route path="/nonit" element={<Nonit />} />
      <Route path="/mnc" element={<Mnc />} />
      <Route path="/startup" element={<Startup />} />
      <Route path="/support" element={<SupportForm />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/mock-interview" element={<MockInterview category="IT" difficulty="Intermediate" />} /> {/* AI Mock Interview */}
    </Routes>

    <Footer />
  </Router>
);

export default App;

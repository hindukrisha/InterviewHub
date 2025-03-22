import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <i className="footer-name">Interview Hub</i>
      </div>
      <div className="footer-links">
        <a
          href="https://whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
          />
        </a>
        <a
          href="https://www.instagram.com/jobhustles__jobupdates"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
          />
        </a>
        <a
          href="https://youtube.com/@jobhustles"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://t3.ftcdn.net/jpg/06/97/27/76/240_F_697277665_7RCNAHR7fGbVfL9wRzqSEWMd7RSuCDYj.jpg"
            alt="YouTube"
          />
        </a>
        <a
          href="https://t.me/Jobs_hustle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
            alt="Telegram"
          />
        </a>
      </div>
      <div className="footer-nav">
        <Link to="/about" className="footer-nav-item">
          About Us
        </Link>
        <Link to="/contact" className="footer-nav-item">Contact</Link>
        <Link to="/privacy-policy" className="footer-nav-item">
          Privacy Policy
        </Link>
        <Link to="/terms-of-service" className="footer-nav-item">
          Terms of Service
        </Link>
      </div>
      <div className="footer-about">
        <i>About Interview Hub</i>
        <i>
          A platform for posting and exploring interview questions based on
          companies, categorized into IT, Non-IT, MNC and Startups.
        </i>
      </div>
      <div className="footer-company-categories">
        <h4>Explore Companies:</h4>
        <div className="footer-category-links">
          <Link to="/it" className="footer-category-item">
            IT
          </Link>
          <Link to="/nonit" className="footer-category-item">
            Non-IT
          </Link>
          <Link to="/mnc" className="footer-category-item">
            MNC
          </Link>
          <Link to="/startup" className="footer-category-item">
            Startup
          </Link>
        </div>
      </div>
      <div className="footer-copyright">
        <i>Copyright © Interview Hub. All rights reserved.</i>
      </div>
    </footer>
  );
};

export default Footer;

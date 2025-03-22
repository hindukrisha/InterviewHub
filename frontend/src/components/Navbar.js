import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Importing the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar">
        {/* Heading in the Center */}
        <h1 className="navbar-heading">InterviewHub</h1>

        <div className="nav-container">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/it">IT</Link>
            </li>
            <li>
              <Link to="/nonit">Non-IT</Link>
            </li>
            <li>
              <Link to="/mnc">MNC</Link>
            </li>
            <li>
              <Link to="/startup">Startup</Link>
            </li>
            <li>
              <Link to="/mock-interview">Mock Interview</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>{" "}
            {/* Added Support Link */}
          </ul>
        </div>

        <a
          href="https://www.whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          WhatsApp
        </a>

        {/* Hamburger Icon for Mobile */}
        <div className="hamburger" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>

      {/* Sidebar Menu for Mobile */}
      <div className={`sidebar ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/it" onClick={toggleSidebar}>
              IT
            </Link>
          </li>
          <li>
            <Link to="/nonit" onClick={toggleSidebar}>
              Non-IT
            </Link>
          </li>
          <li>
            <Link to="/mnc" onClick={toggleSidebar}>
              MNC
            </Link>
          </li>
          <li>
            <Link to="/startup" onClick={toggleSidebar}>
              Startup
            </Link>
          </li>
          <li>
            <Link to="/mock-interview" onClick={toggleSidebar}>
              Mock Interview
            </Link>
          </li>
          <li>
            <Link to="/support" onClick={toggleSidebar}>
              Support
            </Link>
          </li>{" "}
          {/* Added Support Link */}
          <li>
            <a
              href="https://www.whatsapp.com/channel/0029VajnMvaKWEKzCKLMt40P"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>

      {/* Blurred Background when Sidebar is Open */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;

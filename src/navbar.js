import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };



  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false);
  };

  return (
    <nav className="glass-navbar">
      <div className="brand-name">Om</div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>
            About
          </a>
        </li>
        <li>
          <a href="#experience" onClick={(e) => handleNavClick(e, 'experience')}>
            Experience
          </a>
        </li>
        <li>
          <a href="#projects" onClick={(e) => handleNavClick(e, 'projects')}>
            Projects
          </a>
        </li>
        <li>
          <a href="#certificate" onClick={(e) => handleNavClick(e, 'certificate')}>
            Certificate
          </a>
        </li>
        <li>
          <a href="#resume" onClick={(e) => handleNavClick(e, 'resume')}>
            Resume
          </a>
        </li>
        <li>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

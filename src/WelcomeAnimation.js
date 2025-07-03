import React, { useState, useEffect } from 'react';
import './App.css';

const WelcomeAnimation = ({ onComplete }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [nameAnimated, setNameAnimated] = useState(false);

  useEffect(() => {
    // Start name animation after a brief delay
    const nameTimer = setTimeout(() => {
      setNameAnimated(true);
    }, 500);

    // Complete animation after name is done
    const completeTimer = setTimeout(() => {
      setShowWelcome(false);
      setTimeout(onComplete, 500); // Give time for fade out
    }, 3500);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!showWelcome) {
    return null;
  }

  return (
    <div className="welcome-overlay">
      <div className="welcome-content">
        <div className={`welcome-name ${nameAnimated ? 'animate' : ''}`}>
          <span className="letter" style={{ '--delay': '0s' }}>O</span>
          <span className="letter" style={{ '--delay': '0.1s' }}>M</span>
          <span className="space"></span>
          <span className="letter surname" style={{ '--delay': '0.3s' }}>T</span>
          <span className="letter surname" style={{ '--delay': '0.4s' }}>A</span>
          <span className="letter surname" style={{ '--delay': '0.5s' }}>K</span>
          <span className="letter surname" style={{ '--delay': '0.6s' }}>A</span>
          <span className="letter surname" style={{ '--delay': '0.7s' }}>L</span>
          <span className="letter surname" style={{ '--delay': '0.8s' }}>E</span>
        </div>
        <div className="welcome-subtitle">
          <span>Web Developer & Tech Enthusiast</span>
        </div>
        <div className="welcome-loader">
          <div className="loader-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeAnimation;

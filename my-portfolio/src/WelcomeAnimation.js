import React, { useEffect } from 'react';
import './WelcomeAnimation.css'; // Assuming you have a CSS file for styling

const WelcomeAnimation = () => {
  useEffect(() => {
    const welcomeText = document.getElementById('welcome-text');
    welcomeText.classList.add('fade-in');

    const timer = setTimeout(() => {
      welcomeText.classList.remove('fade-in');
      welcomeText.classList.add('fade-out');
    }, 3000); // Duration for the welcome message

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="welcome-animation">
      <h1 id="welcome-text">Welcome to My Portfolio!</h1>
    </div>
  );
};

export default WelcomeAnimation;
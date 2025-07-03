import React, { useEffect, useRef } from 'react';
import './App.css'; // Corrected import path assuming style.css is in src
// The rest of your Home component code
const Home = () => {
  const typewriterRef = useRef(null);
  const texts = [
    "Welcome to my portfolio site!",
    "Web Developer.",
    "Open Source Contributor.",
    "Tech Enthusiast.",
    "Lifelong Learner.",
    "Scroll down to explore more.",
  ];

  useEffect(() => {
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typewriterElement = typewriterRef.current;

    function type() {
      const currentText = texts[textIndex];

      if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, charIndex--);
      } else {
        typewriterElement.textContent = currentText.substring(0, charIndex++);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }

      const speed = isDeleting ? 50 : 100;
      setTimeout(type, speed);
    }

    type();
  }, []);

  return (
    <div className="home" id="home">
      <h1 className="name iceland-regular ">OM <span className="sur">Takale</span></h1>
      <div id="typewriter" ref={typewriterRef}></div>
    </div>
  );
};

export default Home;
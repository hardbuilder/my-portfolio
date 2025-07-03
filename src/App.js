import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three'; // Still need to import Three.js for Vanta to use
import WelcomeAnimation from './WelcomeAnimation';
import Navbar from './navbar';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Certificate from './Certificate';
import Resume from './Resume';
import Contact from './Contact';
import './App.css';

function App() {
  const vantaRef = useRef(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  useEffect(() => {
    // Ensure Vanta is available globally before trying to use it
    if (window.VANTA && window.VANTA.GLOBE) {
      const vantaEffect = window.VANTA.GLOBE({ // Use window.VANTA.GLOBE
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0099ff,
        color2: 0xffffff,
        backgroundColor: 0x000000,
        three: THREE // Pass Three.js to Vanta
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    setTimeout(() => {
      setShowMainContent(true);
    }, 100);
  };

  // Scroll animations
  useEffect(() => {
    if (!showMainContent) return;

    // Delay the observer setup to ensure all elements are rendered
    const setupTimer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Add staggered animation for child elements
            const animatedElements = entry.target.querySelectorAll('.animate-item');
            animatedElements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add('animate-item-in');
              }, index * 100);
            });
          }
        });
      }, observerOptions);

      // Observe all sections
      const sections = document.querySelectorAll('.section, .home');
      console.log('Found sections for animation:', sections.length);
      
      sections.forEach((section, index) => {
        console.log(`Section ${index}:`, section.id);
        observer.observe(section);
      });

      // Store observer for cleanup
      window.portfolioObserver = observer;
    }, 500); // Give time for DOM to settle

    // Cleanup
    return () => {
      clearTimeout(setupTimer);
      if (window.portfolioObserver) {
        window.portfolioObserver.disconnect();
        delete window.portfolioObserver;
      }
    };
  }, [showMainContent]);

  return (
    <div className="App">
      <div id="vanta-bg" ref={vantaRef}></div>
      
      {showWelcome && (
        <WelcomeAnimation onComplete={handleWelcomeComplete} />
      )}
      
      {showMainContent && (
        <div className={`main-content ${showMainContent ? 'show' : ''}`}>
          <Navbar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Certificate />
          <Resume />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;

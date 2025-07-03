import React from 'react';
import './App.css';
import omPhoto from './img/om.jpg';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="animate-item">
              Hello! I'm Om Takale, a passionate developer and technology enthusiast 
              based in India. I love creating experiences that combine creativity 
              with functionality.
            </p>
            <p className="animate-item">
              My journey in development started with a curiosity about how websites work, 
              and it has evolved into a passion for building responsive, user-friendly applications 
              using modern technologies.
            </p>
            <p className="animate-item">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or learning about the latest trends in development.
            </p>
          </div>
          <div className="profile-photo-section">
            <div className="profile-photo-container animate-item">
              <img 
                src={omPhoto} 
                alt="Om Takale - Profile" 
                className="profile-photo"
              />
              <div className="photo-overlay">
                <div className="photo-text">
                  <h3>Om Takale</h3>
                  <p>Developer</p>
                </div>
              </div>
            </div>
            <div className="skills-summary animate-item">
              <h3>Core Technologies</h3>
              <div className="skills-compact">
                <span className="skill-tag animate-item">Python</span>
                <span className="skill-tag animate-item">Java</span>
                <span className="skill-tag animate-item">JavaScript</span>
                <span className="skill-tag animate-item">Node.js</span>
                <span className="skill-tag animate-item">React</span>
                <span className="skill-tag animate-item">Next.js</span>
                <span className="skill-tag animate-item">Express.js</span>
                <span className="skill-tag animate-item">CSS3</span>
                <span className="skill-tag animate-item">Three.js</span>
                <span className="skill-tag animate-item">Mongo DB</span>
                <span className="skill-tag animate-item">SQL</span>
                <span className="skill-tag animate-item">Git</span>
                <span className="skill-tag animate-item">GitHub</span>
                <span className="skill-tag animate-item">REST APIs</span>
                <span className="skill-tag animate-item">Vercel</span>
                <span className="skill-tag animate-item">Render</span>
                <span className="skill-tag animate-item">Tableau</span>
                <span className="skill-tag animate-item">Agentic AI</span>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

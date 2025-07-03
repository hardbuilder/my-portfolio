import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume">
      <h2>My Resume</h2>
      <div className="resume-content">
        <div className="resume-sections">
          <div className="resume-section">
            <h3>Education</h3>
            <div className="education-item">
              <h4>Bachelor of Technology in Computer Science and Engineering</h4>
              <p className="institution">Presidency University</p>
              <p className="date">2023 - 2027</p>
              <p className="details">Relevant Coursework: Deloitte, Unstop, HackerRank, VaultofCodes, Apna College</p>
            </div>
          </div>

          <div className="resume-section">
            <h3>Key Skills</h3>
            <div className="skills-categories">
              <div className="skill-category">
                <h4>Frontend</h4>
                <ul>
                  <li>React.js, Vue.js</li>
                  <li>HTML5, CSS3, SASS</li>
                  <li>JavaScript (ES6+)</li>
                  <li>Responsive Design</li>
                  <li>Three.js, D3.js</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Backend</h4>
                <ul>
                  <li>Node.js, Express.js</li>
                  <li>Python, Django</li>
                  <li>RESTful APIs</li>
                  <li>MongoDB, PostgreSQL</li>
                  <li>Authentication & Security</li>
                </ul>
              </div>
              <div className="skill-category">
                <h4>Tools & Others</h4>
                <ul>
                  <li>Git, GitHub</li>
                  <li>Render, Heroku</li>
                  <li>Agentic AI</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="resume-section">
            <h3>Achievements</h3>
            <ul className="achievements-list">
              <li>Led development of Two Wheeled Self Balancing Robot as an Arduino Project</li>
              <li>Led development of Automated Checkout System as a Raspberry Pi Project</li>
            </ul>
          </div>
        </div>

        <div className="resume-download">
          <a href="/path/to/your/resume.pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
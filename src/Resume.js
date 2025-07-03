import React from 'react';
import './App.css';

const Resume = () => {
  const handleDownloadResume = () => {
    // In a real application, you would link to your actual resume file
    const link = document.createElement('a');
    link.href = './img/Om_Resume.pdf'; // Replace with actual resume file path
    link.download = 'Om_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <div className="resume-content">
          <div className="resume-summary">
            <h3>Professional Summary</h3>
            <p>
BTech CSE student entering third year, passionate about software development and
project management. Skilled in full stack development (HTML, CSS, JS, Node.js, React,
Next.js, MongoDB, SQL), with proficiency in Java and Python. Experienced in hardware
projects using Arduino/Raspberry Pi and leading teams on real-world solutions.
            </p>
          </div>

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
                <li>Led development of Automated Checkout System as an Raspberry Pi Project</li>
                </ul>
            </div>
          </div>

          <div className="resume-download">
            <button onClick={handleDownloadResume} className="download-btn">
              <span>📄</span>
              Download Full Resume
            </button>
            <p className="download-note">
              Get the complete PDF version of my resume including detailed project descriptions and references.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

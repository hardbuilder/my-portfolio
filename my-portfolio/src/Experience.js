import React from 'react';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-item">
        <h3>Intern Software Developer</h3>
        <p className="company">Tech Solutions Inc.</p>
        <p className="date">June 2023 - August 2023</p>
        <ul>
          <li>Developed and maintained web applications using React and Node.js.</li>
          <li>Collaborated with cross-functional teams to define, design, and ship new features.</li>
          <li>Participated in code reviews and contributed to team knowledge sharing.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Project Lead - Automated Checkout System</h3>
        <p className="company">University Project</p>
        <p className="date">January 2023 - May 2023</p>
        <ul>
          <li>Led a team of 5 to develop an automated checkout system using Raspberry Pi and Python.</li>
          <li>Implemented machine learning algorithms for product recognition and billing.</li>
          <li>Designed the user interface and integrated it with the backend services.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
import React from 'react';
import './App.css';

const Experience = () => {
  const experiences = [
    {
      title: "Cyber Job Simulation",
      company: "Delloite Australia",
      period: "JUN 2025 ",
      description: [
        "Completed a job simulation involving reading web activity logs",
        "Supported a client in a cyber security breach",
        "Answered questions to identify suspicious user activity"
      ]
    },
    {
      title: "Data Analytics Job Simulation",
      company: "Delloite Australia",
      period: "JUN 2025",
      description: [
        "Completed a Deloitte job simulation involving data analysis and forensic technology ",
        "Created a data dashboard using Tableau ",
        "Used Excel to classify data and draw business conclusions"
      ]
    },
    {
      title: "Technology Job Simulation",
      company: "Delloite Australia",
      period: "JUN 2025",
      description: [
        "Completed a job simulation involving development and coding",
        "Wrote a proposal for creating a dashboard "
      ]
    },
     {
      title: "Web Development",
      company: "Vault Of Codes",
      period: "JUl 2025-Present",
      description: [
        "Developing and maintaining web applications using React, Node.js, and Express.js",
        "Collaborating with designers to create responsive and user-friendly interfaces",
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item animate-item">
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <p className="experience-period">{exp.period}</p>
                <ul className="experience-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

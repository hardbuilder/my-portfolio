import React from 'react';
import './App.css';
import portfolioImage from './img/portf.jpg';
import checkImage from './img/checkout.jpg';
import bnb from './img/bnb.jpg';
import uplft from './img/uplft.jpg';

const Projects = () => {
  const projects = [
    {
      title: "3D Portfolio Website",
      description: "A modern, interactive portfolio website built with React and Three.js featuring 3D globe background, glass morphism design, and smooth animations.",
      technologies: ["React", "Three.js", "Vanta.js", "CSS3", "Glass Morphism"],
      liveLink: "#",
      githubLink: "https://github.com/hardbuilder/my-portfolio",
      image: portfolioImage
    },
    {
      title: "BNBooking - Hotel Booking System",
      description: "A hotel booking system with room management, booking functionality, and using React and Node.js.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js"],
      liveLink: "#",
      githubLink: "https://github.com/hardbuilder/BNBooking",
      image: bnb
    },
    {
      title: "AI Automated Checkout System",
      description: "Built an automated checkout system using Raspberry Pi, Pi Camera, and Python, eliminating manual billing. Led a 5-member team and developed the billing page and payment system.",
      technologies: ["Python", "Raspberry Pi", "Pi Camera", "Flask", "OpenCV"],
      liveLink: "#",
      githubLink: "https://github.com/hardbuilder/Automated-Checkout-System",
      image: checkImage
    },
    {
      title: "UPLYFT Chatbot",
      description: "Full-stack chatbot-based e-commerce web app built for Uplyft Intern Case Study (Internshala, June 2025) using Flask, SQLite, JavaScript, and Bootstrap. Features smart chatbot, real-time search, and clean UI.",
      technologies: ["Python", "Flask", "SQLAlchemy", "SQLite"],
      liveLink: "#",
      githubLink: "https://github.com/hardbuilder/uplyft-chatbot",
      image: uplft
    },

  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-item">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

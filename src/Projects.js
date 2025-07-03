import React from 'react';
import './App.css';
import portfolioImage from './img/portf.jpg';
import checkImage from './img/checkout.jpg';

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
      image: "https://private-user-images.githubusercontent.com/135633997/457638166-71952626-91cb-4480-aed2-8b8e7b9f6122.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1MjUyNDIsIm5iZiI6MTc1MTUyNDk0MiwicGF0aCI6Ii8xMzU2MzM5OTcvNDU3NjM4MTY2LTcxOTUyNjI2LTkxY2ItNDQ4MC1hZWQyLThiOGU3YjlmNjEyMi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwM1QwNjQyMjJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT01YmIxZjIxNDQ2NzExZDU0NGI1MTQzNTkxMGVjYzVlYzYzMjE3NjEwOTI5NDEzNzIzNDg3YzYyNWE4NDAzZmE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.IZHxoHMnSXfQGhZflXSUjOiAtREuzqCgkFf6tLDGe90"
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
      image: "https://private-user-images.githubusercontent.com/135633997/457839900-599c3290-ebf8-4401-9d9f-d7b3d2db055d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE1MzA1MzIsIm5iZiI6MTc1MTUzMDIzMiwicGF0aCI6Ii8xMzU2MzM5OTcvNDU3ODM5OTAwLTU5OWMzMjkwLWViZjgtNDQwMS05ZDlmLWQ3YjNkMmRiMDU1ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzAzJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwM1QwODEwMzJaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNmRlODVmNjYzN2RjYjQ2YzMxN2Y3ODFiOWVmZWYzODIwNjhkZjU1Y2I0MDY1ZDIwOTUwMmMzZGQyN2MyMDc3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.7iR6QC09nyxnIxoZ7TJWsbwyJtKNN66Mg5V-LMzTqIQ"
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

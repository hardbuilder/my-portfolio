import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "AI Automated Checkout System",
      description: "Built an automated checkout system using Raspberry Pi, Pi Camera, and Python, eliminating manual billing. Led a 5-member team and developed the billing page and payment system.",
      technologies: ["Python", "Raspberry Pi", "Pi Camera", "Flask", "OpenCV"],
      liveLink: "#",
      githubLink: "https://github.com/hardbuilder/Automated-Checkout-System",
      image: "path/to/checkImage" // Replace with actual image path
    },
    {
      title: "UPLYFT Chatbot",
      description: "Full-stack chatbot-based e-commerce web app built for Uplyft Intern Case Study (Internshala, June 2025) using Flask, SQLite, JavaScript, and Bootstrap. Features smart chatbot, real-time search, and clean UI.",
      technologies: ["Python", "Flask", "SQLAlchemy", "SQLite"],
      liveLink: "#",
      githubLink: "https://github.com/hardbuilder/uplyft-chatbot",
      image: "path/to/uplyftImage" // Replace with actual image path
    },
    // Add more projects as needed
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
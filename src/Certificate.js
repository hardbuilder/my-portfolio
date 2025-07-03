import React from 'react';
import './App.css';

const Certificate = () => {
  const certificates = [
    {
      title: "Deloitte Cyber Job Simulation",
      issuer: "Forage",
      date: "2025",
      description: "Hands-on experience in cybersecurity with Deloitte, covering incident response, threat analysis, and security operations.",
      credentialId: "",
      verifyLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_pK68TDrcpnfmwyWvg_1750649513698_completion_certificate.pdf"
    },
    {
      title: "Deloitte Data Analytics Job Simulation",
      issuer: "Forage",
      date: "2025",
      description: "Hands-on experience in data analytics with Deloitte, focusing on data visualization, analysis, and business intelligence.",
      credentialId: "FCC-JS-2024-001",
      verifyLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_pK68TDrcpnfmwyWvg_1750652306523_completion_certificate.pdf"
    },
    {
      title: "Deloitte Technology Job Simulation",
      issuer: "Forage",
      date: "2025",
      description: "Hands-on experience in technology roles with Deloitte, covering software development, project management, and IT solutions.",
      credentialId: "FCC-FE-2024-003",
      verifyLink: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_pK68TDrcpnfmwyWvg_1750660984887_completion_certificate.pdf"
    },
    {
      title: "Problem Solving Using Python",
      issuer: "HackerRank",
      date: "2024",
      description: "Comprehensive Python course focusing on problem-solving techniques, data structures, algorithms, and practical coding challenges.",
      credentialId: "COURSERA-WEB-2023-004",
      verifyLink: "https://www.hackerrank.com/certificates/55b18520fec8"
    },
    {
      title: "Python",
      issuer: "HackerRank",
      date: "2024",
      description: "Foundational Python programming skills including syntax, data types, control structures, and functions, with practical exercises.",
      credentialId: "UDEMY-REACT-2024-005",
      verifyLink: "https://www.hackerrank.com/certificates/9e640348522d"
    },
  ];

  return (
    <section id="certificate" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-card animate-item">
              <div className="certificate-header">
                <h3 className="certificate-title">{cert.title}</h3>
                <div className="certificate-issuer">{cert.issuer}</div>
                <div className="certificate-date">{cert.date}</div>
              </div>
              <div className="certificate-body">
                <p className="certificate-description">{cert.description}</p>
              </div>
              <div className="certificate-footer">
                <a href={cert.verifyLink} className="verify-link" target="_blank" rel="noopener noreferrer">
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;

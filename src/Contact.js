import React, { useState } from 'react';
import './App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    setFormStatus('Thank you for your message! I\'ll get back to you soon.');
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'omrtakale@gmail.com',
      link: 'mailto:om.takale@email.com'
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 8767518516'
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Banglore, India',
      link: '#'
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/omtakale/',
      link: 'https://www.linkedin.com/in/omtakale/'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fa-brands fa-github',
      url: 'https://github.com/hardbuilder'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      url: 'https://www.linkedin.com/in/omtakale/'
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-square-instagram',
      url: 'https://www.instagram.com/being_oomm/'
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-intro">
            <p>
              I'm always open to discussing new opportunities, collaborations, or just having 
              a chat about development. Feel free to reach out!
            </p>
          </div>

          <div className="contact-main">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-items">
                {contactInfo.map((item, index) => (
                  <div key={index} className="contact-item animate-item">
                    <span className="contact-icon">{item.icon}</span>
                    <div className="contact-details">
                      <span className="contact-label">{item.label}</span>
                      <a href={item.link} className="contact-value">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link animate-item"
                      title={social.name}
                    >
                      <i class={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group animate-item">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group animate-item">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group animate-item">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group animate-item">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="form-textarea"
                  ></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
              {formStatus && <p className="form-status">{formStatus}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

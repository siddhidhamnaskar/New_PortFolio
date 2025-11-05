import React, { useState, useEffect } from 'react';
import './App.css';
import emailjs from '@emailjs/browser';
import deviceDashboard from './assets/device-dashboard.png';
import elderCareDashboard from './assets/elder-care-dashboard.png';


function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Smooth scrolling for navigation
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  // Show notification
  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 5000); // Hide after 5 seconds
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Replace with your EmailJS service ID
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID; // Replace with your EmailJS template ID
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY; // Replace with your EmailJS public key

      // Prepare template parameters
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'siddhidhamnaskar@gmail.com', // Your email where you want to receive messages
      };

      // Send email using EmailJS
    
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      // Success notification
      showNotification('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback: Open email client as backup
      const mailtoLink = `mailto:siddhidhamnaskar@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoLink);
      
      // Error notification with fallback info
      showNotification('Opening your email client as backup. Please send the email from there, or try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'personal-projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      {/* Notification */}
      {notification && (
        <div className={`notification ${notification.type}`}>
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === 'success' ? '✅' : '❌'}
            </span>
            <p>{notification.message}</p>
            <button 
              className="notification-close"
              onClick={() => setNotification(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>&lt;/&gt; Siddhi Portfolio</span>
          </div>
          <ul className="nav-menu">
            <li><a href="#hero" className={activeSection === 'hero' ? 'active' : ''} onClick={() => scrollToSection('hero')}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => scrollToSection('about')}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => scrollToSection('skills')}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a href="#personal-projects" className={activeSection === 'personal-projects' ? 'active' : ''} onClick={() => scrollToSection('personal-projects')}>Personal Projects</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Siddhi Dhamnaskar</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Web Developer</h2>
            <p className="hero-description">
              I create amazing web experiences with modern technologies. 
              Passionate about building scalable applications and solving complex problems.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                View My Work
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="code-block">
              <div className="code-header">
                <span className="code-title">welcome.js</span>
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
              </div>
              <div className="code-content">
                <pre>{`const developer = {
  name: "Siddhi Dhamnaskar",
  skills: ["React", "Node.js", "Java"],
  passion: "Creating amazing web apps",
  availability: true
};

console.log("Welcome to my portfolio!");`}</pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
              Full Stack Developer with 2+ years of experience building secure, scalable web applications using JavaScript, 
TypeScript, React, and Node.js. Experienced in integrating real-time data from IoT hardware via WebSocket and 
MQTT. Known for writing clean, modular code and collaborating in Agile teams. Seeking remote or full-time roles 
in global companies building AI-driven or real-time platforms
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open source projects, or sharing knowledge with the developer community.
              </p>
              {/* <div className="about-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Projects Completed</p>
                </div>
                <div className="stat">
                  <h3>3+</h3>
                  <p>Years Experience</p>
                </div>
                <div className="stat">
                  <h3>100%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div> */}
            </div>
            <div className="about-image">
              <div className="profile-card">
                <div className="profile-avatar">
                  <span>SD</span>
                </div>
                <h3>Siddhi Dhamnaskar</h3>
                <p>Full Stack Developer</p>
                <div className="social-links">
                  <a href="https://github.com/siddhidhamnaskar" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/siddhi-dhamnaskar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skill-items">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">TypeScript</span>
                <span className="skill-item">HTML5</span>
                <span className="skill-item">CSS3</span>
                <span className="skill-item">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <div className="skill-items">
                <span className="skill-item">Node.js</span>
                <span className="skill-item">Express.js</span>
                <span className="skill-item">REST APIs</span>
                <span className="skill-item">WebSocket</span>
                <span className="skill-item">JWT</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Database</h3>
              <div className="skill-items">
                <span className="skill-item">MySQL</span>
                <span className="skill-item">MongoDB</span>
              
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & DevOps</h3>
              <div className="skill-items">
                <span className="skill-item">Git</span>
                <span className="skill-item">GitHub</span>
                <span className="skill-item">Postman</span>
                <span className="skill-item">Firebase</span>
                <span className="skill-item">Netlify</span>
                <span className="skill-item">Vercel</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Development</h3>
              <div className="skill-items">
                <span className="skill-item">Scalable Architecture</span>
                <span className="skill-item">Modular Code</span>
                <span className="skill-item">Clean Architecture</span>
              
              </div>
            </div>
            <div className="skill-category">
              <h3>Soft Skills</h3>
              <div className="skill-items">
                <span className="skill-item">Code Reviews</span>
                <span className="skill-item">Team 
                Collaboration</span>
                <span className="skill-item">Documentation</span>
               
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                <img src={deviceDashboard} alt="IoT Device Monitoring Dashboard" className="project-screenshot" />
                <div className="project-overlay">
                  <div className="project-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1L13.5 2.5L16.17 5.17C15.24 5.06 14.32 5 13.4 5H10.6C9.68 5 8.76 5.06 7.83 5.17L10.5 2.5L9 1L3 7V9H5V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V9H21ZM17 20H7V9H17V20Z" fill="white"/>
                    </svg>
                  </div>
                  <h4>IoT Dashboard</h4>
                </div>
              </div>
              <div className="project-content">
                <h3>IoT Device Monitoring Dashboard</h3>
                <p>A full-stack IoT device monitoring dashboard solution built with React, Node.js, and MySQL. Features include user authentication, payment integration, and admin dashboard.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MySQL</span>
                  <span>WebSocket</span>
                  <span>MQTT</span>
                  <span>JWT</span>
                  <span>REST APIs</span>
                  <span>Git</span>
                </div>
                <div className="project-links">
                  <a href="https://device-testing-dashboard.vercel.app/" className="btn-outline">Live Demo</a>
                  <a href="https://github.com/siddhidhamnaskar/DeviceTestingDashboard" className="btn-outline">GitHub</a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image">
                <img src={elderCareDashboard} alt="Elder Care Management System" className="project-screenshot" />
                <div className="project-overlay">
                  <div className="project-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill="white"/>
                      <path d="M18 8C18.55 8 19 7.55 19 7C19 6.45 18.55 6 18 6C17.45 6 17 6.45 17 7C17 7.55 17.45 8 18 8ZM6 8C6.55 8 7 7.55 7 7C7 6.45 6.55 6 6 6C5.45 6 5 6.45 5 7C5 7.55 5.45 8 6 8Z" fill="white"/>
                    </svg>
                  </div>
                  <h4>Elder Care</h4>
                </div>
              </div>
              <div className="project-content">
                <h3>Elder Care Management System</h3>
                <p>A collaborative elder care management system with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MySQL</span>
                  <span>WebSocket</span>
                  <span>MQTT</span>
                  <span>JWT</span>
                  <span>REST APIs</span>
                  <span>Git</span>
                </div>
                <div className="project-links">
                  <a href="https://eldercaredashboard.onrender.com" className="btn-outline">Live Demo</a>
                  <a href="https://github.com/siddhidhamnaskar/ElderCareDashboard" className="btn-outline">GitHub</a>
                </div>
              </div>
            </div>

            {/* <div className="project-card">
              <div className="project-image analytics-bg">
                <div className="project-overlay">
                  <div className="project-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 9.2H7V19H5V9.2ZM10.6 5H12.4V19H10.6V5ZM16.2 13H18V19H16.2V13ZM21.8 1H23.6V19H21.8V1Z" fill="white"/>
                      <path d="M3 21H21V23H3V21Z" fill="white"/>
                    </svg>
                  </div>
                  <h4>Analytics</h4>
                </div>
              </div>
              <div className="project-content">
                <h3>Analytics Dashboard</h3>
                <p>A comprehensive analytics dashboard with interactive charts, real-time data visualization, and customizable reports for business insights.</p>
                <div className="project-tech">
                  <span>React</span>
                  <span>Python</span>
                  <span>Django</span>
                  <span>Chart.js</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn-outline">Live Demo</a>
                  <a href="#" className="btn-outline">GitHub</a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Personal Projects Section */}
      <section id="personal-projects" className="projects">
        <div className="container">
          <h2 className="section-title">Personal Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">
                
                  <div className="project-icon">
                     <img width="100%" src="https://res.cloudinary.com/dguer2ngx/image/upload/v1762306415/Images/04.11.2025_08.26.29_REC_bdeuhc.png"  alt="MyShop"/>
                  </div>
                  
              </div>
              <div className="project-content">
                <h3>E-commerce Site</h3>
                <p>This project is a simple full-stack web application built to practice using Next.js, TypeScript, and Prisma ORM. The goal was to understand how to connect a Next.js frontend with a database using Prisma and manage data through API routes.</p>
                <div className="project-tech">
                  <span>Next.js 14</span>
                  <span>TypeScript</span>
                  <span>Tailwind CSS</span>
                  <span>Shadcn/UI</span>
                  <span>Prisma</span>
                  <span>MongoDB</span>
                  <span>Git</span>
                </div>
                <div className="project-links">
                  <a href="https://ecommerce-site-three-psi.vercel.app/" className="btn-outline">View Live Site</a>
                  <a href="https://github.com/siddhidhamnaskar/Ecommerce-Site" className="btn-outline">GitHub</a>
                  <a href="https://res.cloudinary.com/dguer2ngx/video/upload/v1762306610/Videos/04.11.2025_08.10.46_REC_hcgudr.mp4" className="btn-outline">Demo Video</a>
                
                </div>
              </div>
            </div>

         
  
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together!</h3>
              <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h4>Email</h4>
                    <p>siddhidhamnaskar@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <h4>Phone</h4>
                    <p>+91 8605298570</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h4>Location</h4>
                    <p>Ratnagiri, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="5" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p>&copy; 2025 Siddhi Dhamnaskar. All rights reserved.</p>
            </div>
            <div className="footer-right">
              <div className="social-links">
                <a href="https://github.com/siddhidhamnaskar" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/siddhi-dhamnaskar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> */}
                <a href="mailto:siddhidhamnaskar@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

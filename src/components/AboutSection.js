import React from 'react';

const AboutSection = () => {
  return (
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

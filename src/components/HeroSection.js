import React from 'react';

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
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
  );
};

export default HeroSection;

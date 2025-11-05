import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  };

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
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Siddhi Portfolio</span>
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
  );
};

export default Navigation;

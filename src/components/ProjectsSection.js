import React from 'react';
import deviceDashboard from '../assets/device-dashboard.png';
import elderCareDashboard from '../assets/elder-care-dashboard.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'IoT Device Monitoring Dashboard',
      description: 'A full-stack IoT device monitoring dashboard solution built with React, Node.js, and MySQL. Features include user authentication, payment integration, and admin dashboard.',
      image: 'https://res.cloudinary.com/dguer2ngx/image/upload/v1763664769/Images/20.11.2025_23.01.49_REC_flrhf4.png',
      tech: ['React', 'Node.js', 'MySQL', 'WebSocket', 'MQTT', 'JWT', 'REST APIs', 'Git'],
      demoLink: 'http://snackboss-iot.in:2000/',
      githubLink: 'https://github.com/siddhidhamnaskar/DeviceTestingDashboard',
      videoLink: 'https://res.cloudinary.com/dguer2ngx/video/upload/v1763653929/Videos/20.11.2025_21.13.24_REC_w4jsia.mp4',
      overlayIcon: '🏠',
      overlayTitle: 'IoT Dashboard'
    },
     {
      id: 2,
      title: 'CareTest',
      description: 'Onnline testing platform designed to support children with disabilities. The website provides simple, visually clear tests that help kids practice recognition, understanding, and basic cognitive skills.Its clean layout, large buttons, and distraction-free interface make it easy for children to attempt questions independently or with minimal guidance.',
      image: 'https://res.cloudinary.com/dguer2ngx/image/upload/v1763664794/Images/20.11.2025_23.02.09_REC_hxsrf3.png',
      tech: ['Next.js', 'Typescript', 'Tailwind Css', 'MySQL', 'Prisma', 'Google Auth', 'Cloudinary', 'Git'],
      demoLink: 'http://snackboss-iot.in:3002/',
      githubLink: 'https://github.com/siddhidhamnaskar/ElderCareDashboard',
      videoLink: 'https://res.cloudinary.com/dguer2ngx/video/upload/v1763653389/Videos/20.11.2025_20.59.46_REC_c1n1l1.mp4',
      overlayIcon: '👥',
      overlayTitle: 'CareTest App'
    }
    // {
    //   id: 3,
    //   title: 'Elder Care Management System',
    //   description: 'A collaborative elder care management system with real-time updates, drag-and-drop functionality, and team collaboration features.',
    //   image: elderCareDashboard,
    //   tech: ['React', 'Node.js', 'MySQL', 'WebSocket', 'MQTT', 'JWT', 'REST APIs', 'Git'],
    //   demoLink: 'https://eldercaredashboard.onrender.com',
    //   githubLink: 'https://github.com/siddhidhamnaskar/ElderCareDashboard',
    //   overlayIcon: '👥',
    //   overlayTitle: 'Elder Care'
    // }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-screenshot" />
                <div className="project-overlay">
                  <div className="project-icon">
                    {project.overlayIcon}
                  </div>
                  <h4>{project.overlayTitle}</h4>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink} className="btn-outline">Live Demo</a>
                  <a href={project.videoLink} className="btn-outline">Demo Video</a>
                  {/* <a href={project.githubLink} className="btn-outline">GitHub</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

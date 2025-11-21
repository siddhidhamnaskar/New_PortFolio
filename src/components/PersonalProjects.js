import React from 'react';

const PersonalProjects = () => {
  const personalProjects = [
    {
      id: 1,
      title: 'E-commerce Site',
      description: 'This project is a simple full-stack web application built to practice using Next.js, TypeScript, and Prisma ORM. The goal was to understand how to connect a Next.js frontend with a database using Prisma and manage data through API routes.',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI', 'Prisma', 'MongoDB', 'Git'],
      image: 'https://res.cloudinary.com/dguer2ngx/image/upload/v1762306415/Images/04.11.2025_08.26.29_REC_bdeuhc.png',
      demoLink: 'https://ecommerce-site-three-psi.vercel.app/',
      githubLink: 'https://github.com/siddhidhamnaskar/Ecommerce-Site',
      videoLink: 'https://res.cloudinary.com/dguer2ngx/video/upload/v1762306610/Videos/04.11.2025_08.10.46_REC_hcgudr.mp4'
    },
     {
      id: 1,
      title: 'Full Stack Blog Application',
      description: 'A full-stack Blog Web App built using React.Js, Node.js, Express, MongoDB, and EJS. It supports creating, editing, viewing, and deleting blog posts. A simple CRUD project demonstrating frontend-backend integration.',
      tech: ['React.js', 'Node.js', 'Material Ui', 'Express.js','MongoDB','Cloudinary','JWT','Git'],
      image: 'https://res.cloudinary.com/dguer2ngx/image/upload/v1763358955/Images/17.11.2025_11.19.26_REC_utzdiy.png',
      demoLink: 'https://blog-web-app-vert.vercel.app/',
      githubLink: 'https://github.com/siddhidhamnaskar/Blog_web_app',
      videoLink: 'https://res.cloudinary.com/dguer2ngx/video/upload/v1762306610/Videos/04.11.2025_08.10.46_REC_hcgudr.mp4'
    }
  ];

  return (
    <section id="personal-projects" className="projects">
      <div className="container">
        <h2 className="section-title">Personal Projects</h2>
        <div className="projects-grid">
          {personalProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} className="project-screenshot" />
                </a>
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
                  <a href={project.demoLink} className="btn-outline">View Live Site</a>
                  <a href={project.githubLink} className="btn-outline">GitHub</a>
                  {/* <a href={project.videoLink} className="btn-outline">Demo Video</a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PersonalProjects;

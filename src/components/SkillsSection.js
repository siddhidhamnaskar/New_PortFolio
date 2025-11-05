import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'REST APIs', 'WebSocket', 'JWT']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Tools & DevOps',
      skills: ['Git', 'GitHub', 'Postman', 'Firebase', 'Netlify', 'Vercel']
    },
    {
      title: 'Development',
      skills: ['Scalable Architecture', 'Modular Code', 'Clean Architecture']
    },
    {
      title: 'Soft Skills',
      skills: ['Code Reviews', 'Team Collaboration', 'Documentation']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skillCategories.map(category => (
            <div key={category.title} className="skill-category">
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

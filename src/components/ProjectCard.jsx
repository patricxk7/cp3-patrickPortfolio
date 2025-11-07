import React from 'react';

const ProjectCard = ({ project, onSelectProject }) => (
  <div className="project-card" onClick={() => onSelectProject(project.id)}>
    <h3 className="card-title">{project.title}</h3>
    <p className="card-description">{project.description}</p>
    <div className="card-tags">
      {project.tags.map(tag => (
        <span key={tag} className="tag">{tag}</span>
      ))}
    </div>
    <span className="card-year">{project.year}</span>
  </div>
);

export default ProjectCard;

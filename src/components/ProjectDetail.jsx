import React from 'react';
import { ArrowLeft } from 'lucide-react';

const ProjectDetail = ({ project, onBack }) => (
  <section className="container detail-section">
    <button className="back-button" onClick={onBack}>
      <ArrowLeft size={20} /> Voltar para Projetos
    </button>
    <h1 className="detail-title">{project.title}</h1>
    <p className="detail-year">Ano: {project.year}</p>
    <div className="detail-tags">
      {project.tags.map(tag => (
        <span key={tag} className="tag tag-large">{tag}</span>
      ))}
    </div>
    <p className="detail-long-description">{project.detailedDescription}</p>
    <div className="detail-placeholder">
      <p>Demonstração/Screenshot do Projeto</p>
    </div>
    <h3 className="next-steps-title">Tecnologias-Chave</h3>
    <ul>
      {project.tags.map(tag => <li key={tag}>{tag}</li>)}
    </ul>
  </section>
);

export default ProjectDetail;

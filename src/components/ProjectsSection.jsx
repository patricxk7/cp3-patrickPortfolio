import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { mockProjects } from '../data/mockProjects';
import ProjectCard from './ProjectCard';

const ProjectsSection = ({ onSelectProject }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = useMemo(() => {
    if (!searchQuery) return mockProjects;
    const lower = searchQuery.toLowerCase();
    return mockProjects.filter(p =>
      p.title.toLowerCase().includes(lower) ||
      p.description.toLowerCase().includes(lower) ||
      p.tags.some(tag => tag.toLowerCase().includes(lower))
    );
  }, [searchQuery]);

  return (
    <section className="container projects-section" id="projects">
      <h1 className="section-title">Meus Projetos</h1>
      <div className="search-bar-container">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Buscar por nome, descrição ou tecnologia..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} onSelectProject={onSelectProject} />
          ))
        ) : (
          <div className="no-projects-found">
            <p>Nenhum projeto localizado. Tente outra palavra-chave.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

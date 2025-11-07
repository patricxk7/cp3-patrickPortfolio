import React, { useState, useCallback } from 'react';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetail from './components/ProjectDetail';
import ContactSection from './components/ContactSection';
import { socialLinks } from './data/socialLinks';
import { mockProjects } from './data/mockProjects';
import './styles/global.css';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleSelectProject = useCallback((id) => {
    setSelectedProjectId(id);
    setCurrentPage('ProjectDetail');
  }, []);

  const handleBackToProjects = useCallback(() => {
    setSelectedProjectId(null);
    setCurrentPage('Projects');
  }, []);

  const renderContent = () => {
    switch (currentPage) {
      case 'Home':
        return <HomeSection />;
      case 'Projects':
        return <ProjectsSection onSelectProject={handleSelectProject} />;
      case 'Contact':
        return <ContactSection />;
      case 'ProjectDetail':
        const project = mockProjects.find(p => p.id === selectedProjectId);
        return project ? <ProjectDetail project={project} onBack={handleBackToProjects} /> : <p className="container">Projeto não encontrado.</p>;
      default:
        return <HomeSection />;
    }
  };

  return (
    <>
      <header className="header">
        <div className="header-content">
          <a className="logo" onClick={() => setCurrentPage('Home')}>PATRICK</a>
          <nav className="nav-menu">
            <a className={`nav-item ${currentPage === 'Home' ? 'active' : ''}`} onClick={() => setCurrentPage('Home')}>Início</a>
            <a id="projects-link" className={`nav-item ${currentPage === 'Projects' ? 'active' : ''}`} onClick={() => setCurrentPage('Projects')}>Projetos</a>
            <a className={`nav-item ${currentPage === 'Contact' ? 'active' : ''}`} onClick={() => setCurrentPage('Contact')}>Contato</a>
          </nav>
        </div>
      </header>

      <main>{renderContent()}</main>

      <footer className="footer">
        <p className="footer-text">© {new Date().getFullYear()} [Patrick]. Todos os direitos reservados. | Desenvolvido para o CP3.</p>
        <div className="footer-social">
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" title={link.name}>
              <link.icon size={28} />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}

import React, { useState } from 'react';
import { socialLinks } from '../data/socialLinks';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos do formulário.');
      return;
    }

    alert(`
      --- Formulário Recebido ---
      Nome: ${name}
      E-mail: ${email}
      Mensagem: "${message}"

      (Este é um alerta de demonstração conforme o requisito CP3.)
    `);

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="container contact-section" id="contact">
      <h1 className="section-title">Entre em Contato</h1>

      <div className="contact-content-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button type="submit" className="submit-button">Enviar Mensagem</button>
        </form>

        <div className="social-links-list">
          <h3 className="social-title">Minhas Mídias</h3>
          {socialLinks.map(link => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link-item" style={{ '--social-color': link.color }}>
              <link.icon size={24} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

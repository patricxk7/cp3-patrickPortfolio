import React from "react";

export default function HomeSection() {
  return (
    <section className="container home-section">
      <div className="intro-content">
        <h1 className="title-name">Olá, eu sou Patrick Canuto</h1>
        <h2 className="subtitle-role">Foco em Python, SQL e Análise de Dados</h2>
        <p className="about-text">
          Bem-vindo ao meu portfólio! Sou um estudante apaixonado por tecnologia e pela área de dados. 
          Tenho foco em Python, SQL e Data Science, com interesse em explorar, modelar e transformar 
          informações em insights úteis. Busco constantemente aprimorar minhas habilidades em bancos 
          de dados, automação e visualização de dados. Explore meus projetos para conhecer um pouco 
          do meu aprendizado e experiências práticas!
        </p>
        <a
          href="#projects"
          className="cta-button"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("projects-link").click();
          }}
        >
          Ver Projetos
        </a>
      </div>

      <div className="profile-image-placeholder">
        <p>Foto de Perfil</p>
      </div>
    </section>
  );
}

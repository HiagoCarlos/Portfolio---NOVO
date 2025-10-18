import React from 'react';
import styles from './Hero.module.css'; // Importando os estilos do nosso módulo
import fotoPerfil from '../assets/foto-perfil.png'; // IMPORTANTE: Verifique se o nome do arquivo da sua foto está correto

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <p className={styles.greeting}>Olá, </p>
        <h1 className={styles.title}>
          <span> Sou o </span>
          <span>Hiago Carlos</span>
        </h1>
        <h2 className={styles.subtitle}>Desenvolvedor Full Stack</h2>

        <div className={styles.buttonContainer}>
          <a href="#projects" className={styles.btnPrimary}>Projetos</a>
          <a href="/Currículo.pdf" download className={styles.btnSecondary}>Download CV</a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageBackground}></div>
        <img 
          src={fotoPerfil} 
          alt="Foto de perfil de [Seu Nome]" 
          className={styles.profileImage} 
        />
      </div>
    </section>
  );
};

export default Hero;
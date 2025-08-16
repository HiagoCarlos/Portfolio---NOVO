import React from 'react';
import styles from './Hero.module.css'; // Importando os estilos do nosso módulo
import fotoPerfil from '../assets/foto-perfil.jpg'; // IMPORTANTE: Verifique se o nome do arquivo da sua foto está correto

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <p className={styles.greeting}>Hello.</p>
        <h1 className={styles.title}>
          <span>I'm </span>
          <span>Hiago Carlos</span>
        </h1>
        <h2 className={styles.subtitle}>Fullstack developer</h2>

        <div className={styles.buttonContainer}>
          <a href="#projects" className={styles.btnPrimary}>Got a project?</a>
          {/* Coloque o link para o seu currículo na pasta 'public' */}
          <a href="/Currículo.pdf" download className={styles.btnSecondary}>My resume</a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageBackground}></div>
        <img 
          src={fotoPerfil} 
          alt="Foto de perfil de Hiago Carlos" 
          className={styles.profileImage} 
        />
      </div>
    </section>
  );
};

export default Hero;
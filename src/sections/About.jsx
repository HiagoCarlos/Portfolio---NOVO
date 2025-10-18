import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    // O id="about" é MUITO importante para que o link do Header funcione
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>Sobre mim</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            Olá! Sou Hiago, um desenvolvedor Full Stack apaixonado por criar aplicações web intuitivas, dinâmicas e de alto desempenho. Minha jornada na tecnologia começou com uma profunda curiosidade sobre como as coisas funcionam, que rapidamente evoluiu para uma carreira que eu amo.
          </p>
          <p>
           Tenho experiência em desenvolvimento Full Stack, com conhecimentos que abrangem tanto o front-end quanto o back-end. Estou em constante aprimoramento, participando de projetos que me desafiam e me fazem evoluir como desenvolvedor.
          </p>
        </div>
        <div className={styles.aboutSkills}>
          <h3 className={styles.skillsTitle}>Principais Habilidades</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>HTML5</li>
            <li className={styles.skillItem}>CSS3</li>
            <li className={styles.skillItem}>JavaScript (ES6+)</li>
            <li className={styles.skillItem}>React</li>
            <li className={styles.skillItem}>Node.js</li>
            <li className={styles.skillItem}>Angular</li>
            <li className={styles.skillItem}>Git & GitHub</li>
            <li className={styles.skillItem}>SQL</li>
            <li className={styles.skillItem}>HTTP REST</li>
            <li className={styles.skillItem}>API Rest</li>
            <li className={styles.skillItem}>PHP</li>
            <li className={styles.skillItem}>Flutter</li>
            <li className={styles.skillItem}>Dart</li>
            <li className={styles.skillItem}>Java</li>
            <li className={styles.skillItem}>Vue.js</li>
            <li className={styles.skillItem}>MongoDB</li>
            <li className={styles.skillItem}>Figma</li>
            <li className={styles.skillItem}>PostgreSQL</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
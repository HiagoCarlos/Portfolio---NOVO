import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    // O id="about" é MUITO importante para que o link do Header funcione
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>
            Hello! I'm Hiago, a passionate Fullstack Developer with a love for creating intuitive, dynamic, and high-performance web applications. My journey in technology started with a deep curiosity about how things work, which quickly evolved into a career I love.
          </p>
          <p>
           I have experience in full stack development, with knowledge that covers both front-end and back-end. I’m constantly improving my skills and taking on projects that challenge me to grow as a developer.
          </p>
        </div>
        <div className={styles.aboutSkills}>
          <h3 className={styles.skillsTitle}>My Main Skills</h3>
          <ul className={styles.skillsList}>
            <li className={styles.skillItem}>HTML5</li>
            <li className={styles.skillItem}>CSS3</li>
            <li className={styles.skillItem}>JavaScript (ES6+)</li>
            <li className={styles.skillItem}>React</li>
            <li className={styles.skillItem}>Node.js</li>
            <li className={styles.skillItem}>Git & GitHub</li>
            <li className={styles.skillItem}>SQL</li>
            <li className={styles.skillItem}>API Rest</li>
            <li className={styles.skillItem}>PHP</li>
            <li className={styles.skillItem}>Flutter</li>
            <li className={styles.skillItem}>Dart</li>
            <li className={styles.skillItem}>Java</li>
            <li className={styles.skillItem}>Vue.js</li>
            <li className={styles.skillItem}>MongoDB</li>
            <li className={styles.skillItem}>Figma</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import styles from './Projects.module.css';
import { projectsData } from '../data/projectsData.js'; // Importando nossos dados
import ProjectCard from '../components/ProjectCard.jsx'; // Importando nosso card

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
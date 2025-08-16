import React from 'react';
import styles from './ProjectCard.module.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, liveUrl, repoUrl } = project;

  return (
    <div className={styles.card}>
      <img src={image} alt={`Screenshot do projeto ${title}`} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        <ul className={styles.cardTags}>
          {tags.map((tag, index) => (
            <li key={index} className={styles.tag}>{tag}</li>
          ))}
        </ul>
        <div className={styles.cardLinks}>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaExternalLinkAlt /> Demo
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaGithub /> Código
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
import React from 'react';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.description}>
        I'm currently open to new opportunities. Feel free to contact me! Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <div className={styles.contactLinks}>
        <a 
          href="mailto:hiagocarlos215@gmail.com" 
          className={styles.contactLink}
        >
          <FaEnvelope size={30} />
          <span>hiagocarlos215@gmail.com</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/hiagocarlos/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.contactLink}
        >
          <FaLinkedin size={30} />
          <span>LinkedIn</span>
        </a>
        <a 
          href="https://github.com/HiagoCarlos" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.contactLink}
        >
          <FaGithub size={30} />
          <span>GitHub</span>
        </a>
        <a 
          href="https://wa.me/5564984060234" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.contactLink}
        >
          <FaWhatsapp size={30} />
          <span>WhatsApp</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
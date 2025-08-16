import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* O código new Date().getFullYear() pega o ano atual automaticamente! */}
      <p>&copy; {new Date().getFullYear()} Hiago Carlos. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
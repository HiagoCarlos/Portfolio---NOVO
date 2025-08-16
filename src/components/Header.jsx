import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>Portfólio</a>

      {/* Botão do menu hambúrguer, só aparece em telas menores */}
      <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Lista de links de navegação */}
      <nav className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}><a href="#hero" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li className={styles.menuItem}><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li className={styles.menuItem}><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li className={styles.menuItem}><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
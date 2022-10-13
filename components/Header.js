import React from 'react'
import styles from '../styles/Header.module.css'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import toggleMenuOpen from '../utils/toggleMenuOpen';

const Header = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navbarOverlay}
      onClick={toggleMenuOpen}></div>
      <button 
    type="button"
    className={styles.hamburger}
    onClick={toggleMenuOpen}>
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
    </button>
    
    <a href="/" className={styles.logo}>
      JONAS ŠIMUTIS
    </a>
   <nav className={styles.navMenu}>
    <button type='button' className={styles.navButton}>About</button>
    <button type='button' className={styles.navButton}>Projects</button>
    <button type='button' className={styles.navButton}>Contact</button>
   </nav>
  </nav>

  )
}

export default Header
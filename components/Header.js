import React from 'react'
import styles from '../styles/Header.module.css'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
const Header = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>
            <a> 
                <span>Jonas Šimutis</span>
            </a>
        </div>

        <div className={styles.navContainer}>
        <a href="/about" class="active">
          About
        </a>
        <a href="/engineering" class="active">
          Engineering
        </a> <a href="/projects" class="active">
          Projects
        </a> <a href="/contact" class="active">
          Contact
        </a>
        </div>
        <div className={styles.socialIcons}>
        <a className={styles.socialIcon} href="https://www.linkedin.com/in/jonas-simutis" target="_blank">
          <AiFillLinkedin size="3rem" />
        </a>
        <a className={styles.socialIcon} href="https://www.instagram.com/lukkutis/" target="_blank">
          <AiFillInstagram size="3rem"/>
        </a>
        </div>
    </div>
  )
}

export default Header
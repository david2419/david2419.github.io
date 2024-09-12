import React, { useState } from "react";
import closeIcon from '../../../assests/nav/closeIcon.png'
import menuIcon from'../../../assests/nav/menuIcon.png'
import dclogo from'../../../assests/DC-logos/nbgLogo.png'

import styles from "./Navbar.module.css";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
    
       <a className={styles.title} href="/">
        <img className={styles.logo} src={ dclogo} alt="DC_logo"/>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? closeIcon
              : menuIcon
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
           <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
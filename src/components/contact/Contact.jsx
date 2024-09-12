import React from "react";

import styles from "./Contact.module.css";
import emailIcon from "../../../assests/contact/emailIcon.png"
import githubIcon from "../../../assests/contact/githubIcon.png"
import linkedinIcon from "../../../assests/contact/linkedinIcon.png"


const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:d.calderon146@gmail.com">d.calderon146@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/davidcalderon146/">linkedin.com/in/davidcalderon146/</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://github.com/david2419">github.com/david2419</a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact
import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import education from "../../data/education.json";



const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skills & Education</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                    
                  <img src={`/assests/${skill.imageSrc}`} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {education.map((educationItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={`/assests/${educationItem.imageSrc}`}
                  alt={`${educationItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${educationItem.role}, ${educationItem.organisation}`}</h3>
                  <p>{`${educationItem.startDate}  ${educationItem.endDate}`}</p>
                  <ul>
                    {educationItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience
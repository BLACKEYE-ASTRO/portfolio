import React from "react";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} className={styles.skillImage} />
              </div>
              <p>{skill.title}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;

import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with 2year's of expreience in building
                responsive and optimized sites.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am well-versed in MongoDB, a versatile NoSQL database that
                allows for adaptable and scalable data storage.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I consider myself a craftsman, and I’m someone who cares about
                the things he makes. I design primarily for user experience but,
                being a considerate developer, I also consider accessibility,
                performance, semantics and scalability.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

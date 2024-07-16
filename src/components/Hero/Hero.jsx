import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akash</h1>
        <p className={styles.description}>
          I am a skilled web developer with a robust foundation in the world of
          web development. I 'm a recent graduate, holding a BScIT degree from
          Mumbai University. My journey has been shaped by a fervent dedication
          to honing my craft through independent projects.
        </p>
        <a
          href="mailto:akashshingare2003@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Akash Shingare"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;

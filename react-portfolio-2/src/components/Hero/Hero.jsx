import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Aditya</h1>
        <p className={styles.description}>
        I am a computer science major at Irvine Valley College, deeply passionate about programming. I enjoy the challenges and creativity involved in developing software and exploring different aspects of computer science.
        </p>
        <a href="mailto:adityaj0714@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/aditya.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

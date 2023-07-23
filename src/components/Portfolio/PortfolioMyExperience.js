import React from "react";
import styles from "./PortfolioMyExperience.module.scss";

const PortfolioMyExperience = () => {
  return (
    <section className={styles.experience}>
      <div className={styles.clipper}>
        {new Array(30).fill(null).map((el, i) => {
          return <div key={i} className={styles["clipper-hole"]}></div>;
        })}
      </div>
      <h2 className={styles.title}>Experience & Education</h2>
      <div className={styles.timelines}>
        <div className={`${styles.timeline} ${styles.education}`}>
          <div className={styles.icon}>
            <i className="fas fa-graduation-cap"></i>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.description}>
            <h3>Bachelor Degree In ITs</h3>
            <p>South Urals State University</p>
            <p>2015 - 2019</p>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
        <div className={`${styles.timeline} ${styles.delphi}`}>
          <div className={styles.description}>
            <h3>Delphi Developer</h3>
            <p>LLC "KOMTEK"</p>
            <p>Aug 2018 - Jan 2019</p>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
              dolor sit amet.
            </p>
          </div>
          <div className={styles.icon}>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
            <i className="fas fa-desktop"></i>
          </div>
        </div>
        <div className={`${styles.timeline} ${styles["dot-net"]}`}>
          <div className={styles.icon}>
            <i className="fas fa-laptop"></i>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
          </div>
          <div className={styles.description}>
            <h3>Software Engineer</h3>
            <p>LLC "KOMTEK"</p>
            <p>Feb 2019 - Current Day</p>
            <p>
              Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem
              ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </div>
        <div className={styles["separation-line"]}></div>
      </div>
    </section>
  );
};

export default PortfolioMyExperience;

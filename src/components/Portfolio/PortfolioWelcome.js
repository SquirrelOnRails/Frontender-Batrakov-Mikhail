import React from "react";
import styles from "./PortfolioWelcome.module.scss";

const PortfolioWelcome = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.backdrop} />
      <h1 className={styles.title}>Batrakov Mikhail</h1>
      <p className={styles.para}>Web Developer</p>
      <div className={styles.social}>
        <div className={styles["coin-wrapper"]}>
          <a
            className={styles["coin"]}
            href="https://github.com/SquirrelOnRails"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className={styles["coin-wrapper"]}>
          <a
            className={styles["coin"]}
            href="https://www.linkedin.com/in/mikhail-batrakov-2718b0145/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
        <div className={styles["coin-wrapper"]}>
          <a
            className={styles["coin"]}
            href="mailto:squirelprogrammer@gmail.com"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className={styles["coin-wrapper"]}>
          <a className={styles["coin"]} href="https://t.me/remmremmer">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioWelcome;

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
          <a className={styles["coin"]} href="#">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
        <div className={styles["coin-wrapper"]}>
          <a className={styles["coin"]} href="#">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
        <div className={styles["coin-wrapper"]}>
          <a className={styles["coin"]} href="#">
            <i className="fab fa-telegram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioWelcome;

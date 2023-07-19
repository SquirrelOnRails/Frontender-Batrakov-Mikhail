import React from "react";
import styles from "./PortfolioWelcome.module.scss";

const PortfolioWelcome = () => {
  return (
    <section className={styles.welcome}>
      <h1 className={styles.title}>Batrakov Mikhail</h1>
      <p className={styles.para}>Web Developer</p>
      <div className={styles.social}>
        <a href="#">
          <i className="fab fa-telegram"></i>
        </a>
      </div>
    </section>
  );
};

export default PortfolioWelcome;

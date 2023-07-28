import React, { Fragment } from "react";
import styles from "./PortfolioAboutMe.module.scss";

const PortfolioAboutMe = () => {
  return (
    <Fragment>
      <section className={styles["about-me_image"]} />
      <section className={styles["about-me_content"]}>
        <div className={styles.backdrop} />
        <ul>
          <li>
            <label>Name</label>
            <p>Mikhail Batrakov</p>
          </li>
          <li>
            <label>Birthday</label>
            <p>Oct 02, 1997</p>
          </li>
          <li className={styles.email}>
            <label>Email</label>
            <p>squirrelprogrammer</p>
            <p>@gmail.com</p>
          </li>
          <li>
            <label>Location</label>
            <p>Bishkek, Kyrgyzstan</p>
          </li>
        </ul>
      </section>
    </Fragment>
  );
};

export default PortfolioAboutMe;

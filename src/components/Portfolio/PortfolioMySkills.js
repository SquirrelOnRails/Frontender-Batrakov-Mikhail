import styles from "./PortfolioMySkills.module.scss";

const PortfolioMySkills = () => {
  return (
    <section className={styles["my-skills"]}>
      <div className={styles.content}>
        <h2 className={styles.heading}>My Professional Skills</h2>
        <div className={styles["skills-wrapper"]}>
          <h3 className={styles.description}>Common Skills</h3>
          <ul className={styles.list}>
            <li className={styles.element}>
              <p>
                Version Controll Systems (GIT, Tortoise-Subversion, Gitlab,
                Github, BitBucket)
              </p>
              <div
                className={`${styles["level-badge"]} ${styles["level-9"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>Docker (Dockerfile, Docker Compose)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-6"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>Bugtracking (YouTrack, Jira, Custoom)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-9"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>Teamwork (Agile, Group Calls, Planning)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-8"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>CI/CD (Teamcity, Vercel)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-8"]}`}
              ></div>
            </li>
          </ul>
        </div>
        <div className={styles["skills-wrapper"]}>
          <h3 className={styles.description}>Frontend Skills</h3>
          <ul className={styles.list}>
            <li className={styles.element}>
              <p>JavaScript (DOM, XHR, Events, async/await, Promice, NodeJS)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-7"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>CSS (sass/scss, adaptive design)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-7"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>
                ReactJS (react-router v5/v6, Hooks, Redux, Context, OAuth,
                modules, functional)
              </p>
              <div
                className={`${styles["level-badge"]} ${styles["level-7"]}`}
              ></div>
            </li>
          </ul>
        </div>
        <div className={styles["skills-wrapper"]}>
          <h3 className={styles.description}>Backend Skills</h3>
          <ul className={styles.list}>
            <li className={styles.element}>
              <p>ASP.NET C# (OOP, ORM, DI, REST-API, MVC)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-9"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>Relational Databases (Oracle, PostgreSQL, MySQL, Liquibase)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-9"]}`}
              ></div>
            </li>
            <li className={styles.element}>
              <p>External API Integration (JWT, REST, SOAP)</p>
              <div
                className={`${styles["level-badge"]} ${styles["level-9"]}`}
              ></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMySkills;

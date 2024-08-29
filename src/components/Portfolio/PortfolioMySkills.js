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
              {/* <div
                className={`${styles["level-badge"]} ${styles["level-9"]}`}
              ></div> */}
              <i className="fas fa-code-merge"></i>
            </li>
            <li className={styles.element}>
              <p>Docker (Dockerfile, Docker Compose)</p>
              <i className="fa-brands fa-docker"></i>
            </li>
            <li className={styles.element}>
              <p>Bugtracking (YouTrack, Jira, Custoom)</p>
              <i className="fas fa-list-check"></i>
            </li>
            <li className={styles.element}>
              <p>Teamwork (Agile, Group Calls, Planning)</p>
              <i className="fas fa-people-group"></i>
            </li>
            <li className={styles.element}>
              <p>CI/CD (Teamcity, Octopus, Vercel)</p>
              <i className="fas fa-truck"></i>
            </li>
          </ul>
        </div>
        <div className={styles["skills-wrapper"]}>
          <h3 className={styles.description}>Frontend Skills</h3>
          <ul className={styles.list}>
            <li className={styles.element}>
              <p>JavaScript (DOM, XHR, Events, async/await, Promice, NodeJS)</p>
              <i className="fa-brands fa-square-js"></i>
            </li>
            <li className={styles.element}>
              <p>CSS (sass/scss, adaptive design)</p>
              <i className="fa-brands fa-css3-alt"></i>
            </li>
            <li className={styles.element}>
              <p>
                ReactJS (react-router v5/v6, Hooks, Redux, Context, OAuth,
                modules, functional)
              </p>
              <i className="fa-brands fa-react"></i>
            </li>
          </ul>
        </div>
        <div className={styles["skills-wrapper"]}>
          <h3 className={styles.description}>Backend Skills</h3>
          <ul className={styles.list}>
            <li className={styles.element}>
              <p>ASP.NET C# (OOP, ORM, DI, REST-API, MVC)</p>
              <i className="fas fa-server"></i>
            </li>
            <li className={styles.element}>
              <p>Relational Databases (Oracle, PostgreSQL, MySQL)</p>
              <i className="fas fa-database"></i>
            </li>
            <li className={styles.element}>
              <p>External API Integration (JWT, REST, SOAP)</p>
              <i className="fas fa-link"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PortfolioMySkills;

import styles from "./Greeting.module.scss";

const Greeting = () => {
  return (
    <section className={styles.greeting}>
      <h2>Your Own To-Do List</h2>
      <p>You can keep a track of your daily goals right here!</p>
    </section>
  );
};

export default Greeting;

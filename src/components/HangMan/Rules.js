import styles from "./Rules.module.scss";

const Rules = () => {
  return (
    <section className={styles.rules}>
      <h2>Welcome to the Hang-Man game!</h2>
      <ul>
        <li>
          For each attempt You will be prompted to guess the hidden word by
          providing a letter.
        </li>
        <li>
          You can select difficulty of the game by clicking on the corresponding
          button, or set up custom rules of the game using the form below.
        </li>
        <li>
          Once You're ready - hit the "Start" button and give it a chance!
        </li>
      </ul>
    </section>
  );
};

export default Rules;

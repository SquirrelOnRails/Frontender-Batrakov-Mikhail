import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <div className={styles.rules}>
      <h2>Welcome to the Hang-Man game!</h2>
      <p>
        For each attempt You will be prompted to guess the hidden word by
        providing a letter.
      </p>
      <p>
        You can select difficulty of the game by clicking on the corresponding
        button, or set up custom rules of the game using the form below.
      </p>
      <p>Once You're ready - hit the "Start" button and give it a chance!</p>
    </div>
  );
};

export default Rules;

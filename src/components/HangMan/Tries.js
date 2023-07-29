import styles from "./Tries.module.scss";

const Tries = (props) => {
  const { usedLetters, hiddenWord } = props;

  return (
    <section className={styles.tries}>
      <label>Your Tries:</label>
      <div className={styles["tries__wrapper"]}>
        {usedLetters.map((letter, idx) => (
          <div
            key={idx}
            className={`${styles.letter}
                ${
                  hiddenWord.indexOf(letter) < 0
                    ? styles.failed
                    : styles.succeeded
                }`}
          >
            {letter}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tries;

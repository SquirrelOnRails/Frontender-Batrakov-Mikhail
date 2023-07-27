import styles from "./WordDisplay.module.scss";

const WordDisplay = (props) => {
  const { word, letters } = props;

  const getDisplayedLettersArr = () => {
    let result = [];
    for (const index in word) {
      const isLetterDisplayed = letters.indexOf(word[index]) !== -1;
      result.push(isLetterDisplayed ? word[index] : null);
    }
    return result;
  };

  const displayedLetters = getDisplayedLettersArr().map((letter, index) => (
    <div key={index} className={styles.scene}>
      <div
        className={`${styles.cube} ${(letter &&
          styles["show-right"]: styles["show-front"])}`}
      >
        <div
          className={`${styles["cube__face"]} 
        ${styles["cube__face--front"]}`}
        >
          ?
        </div>
        <div
          className={`${styles["cube__face"]} 
          ${styles["cube__face--back"]}`}
        ></div>
        <div
          className={`${styles["cube__face"]} 
          ${styles["cube__face--right"]} 
          ${styles.guessed}`}
        >
          {letter || ""}
        </div>
        <div
          className={`${styles["cube__face"]} 
          ${styles["cube__face--left"]}`}
        ></div>
        <div
          className={`${styles["cube__face"]} 
          ${styles["cube__face--top"]}`}
        ></div>
        <div
          className={`${styles["cube__face"]} 
          ${styles["cube__face--bottom"]}`}
        ></div>
      </div>
    </div>
  ));

  return (
    <section className={styles["display-wrapper"]}>
      <div className={styles.display}>{displayedLetters}</div>
    </section>
  );
};

export default WordDisplay;

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
    <div key={index} className={`${styles.letter} ${letter && styles.guessed}`}>
      <span>{letter ?? "?"}</span>
    </div>
  ));

  return (
    <section className={styles["display-wrapper"]}>
      <div className={styles.display}>{displayedLetters}</div>
    </section>
  );
};

export default WordDisplay;

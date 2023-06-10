import styles from "./WordDisplay.module.css";

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
    <li key={index} className={styles["displayed-letter"]}>
      <span className={`${letter && "guessed"}`}>{letter ?? "?"}</span>
    </li>
  ));

  return (
    <div className={styles.display}>
      <ul>{displayedLetters}</ul>
    </div>
  );
};

export default WordDisplay;

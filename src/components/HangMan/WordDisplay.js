import styles from "./WordDisplay.module.css";

const WordDisplay = (props) => {
  const { word, letters } = props;

  const getDisplayedLettersArr = () => {
    let result = [];
    for (const wordLetter in word) {
      const isLetterDisplayed = letters.findIndex(wordLetter) !== -1;
      result.push(isLetterDisplayed ? wordLetter : null);
    }
    return result;
  };

  const displayedLetters = getDisplayedLettersArr().map((letter) => (
    <li className={styles["displayed-letter"]}>
      <span className={`${letter && "guessed"}`}>{letter ?? "?"}</span>
    </li>
  ));

  return (
    <div className={styles.display}>
      <p>{getDisplayedLettersArr()}</p>
      <ul>{displayedLetters}</ul>
    </div>
  );
};

export default WordDisplay;

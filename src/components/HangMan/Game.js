import { useDispatch, useSelector } from "react-redux";

import WordDisplay from "./WordDisplay";
import LetterInput from "./LetterInput";
import { hangmanActions } from "../../store/hangman-slice";

import styles from "./Game.module.scss";

const Game = (props) => {
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.hangman.currentGame);

  const onNewLetterSubmit = (letter) => {
    dispatch(hangmanActions.guessLetter(letter));
  };

  return (
    <section className={styles.game}>
      <p className={styles.status}>
        You've got <span>{props.attemptsLeft}</span> attempts left
      </p>
      <WordDisplay
        word={currentGame.hiddenWord}
        letters={currentGame.usedLetters}
      />
      <LetterInput onSubmit={onNewLetterSubmit} />
    </section>
  );
};

export default Game;

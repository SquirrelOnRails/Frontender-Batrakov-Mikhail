import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

import WordDisplay from "./WordDisplay";
import LetterInput from "./LetterInput";
import Tries from "./Tries";
import { hangmanActions } from "../../store/hangman-slice";

import styles from "./Game.module.scss";

const Game = (props) => {
  const dispatch = useDispatch();
  const currentGame = useSelector((state) => state.hangman.currentGame);
  const distinctUsedLetters = currentGame.usedLetters.filter(
    (val, idx, src) => src.indexOf(val) === idx
  );

  const onNewLetterSubmit = (letter) => {
    dispatch(hangmanActions.guessLetter(letter));
  };

  return (
    <section className={styles.game}>
      {!props.isEndgame && (
        <p className={styles.status}>
          You've got <span>{props.attemptsLeft}</span> attempts left
        </p>
      )}
      <WordDisplay
        word={currentGame.hiddenWord}
        letters={currentGame.usedLetters}
      />
      {!props.isEndgame && (
        <Fragment>
          <Tries
            usedLetters={distinctUsedLetters}
            hiddenWord={currentGame.hiddenWord}
          />
          <LetterInput onSubmit={onNewLetterSubmit} />
          <button className={styles["leave-btn"]} onClick={props.onClose}>
            Leave Game
          </button>
        </Fragment>
      )}
    </section>
  );
};

export default Game;

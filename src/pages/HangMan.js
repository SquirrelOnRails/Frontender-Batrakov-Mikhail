import { Fragment } from "react";

import NewGame from "../components/HangMan/NewGame";
import Game from "../components/HangMan/Game";
import Endgame from "../components/HangMan/Endgame";
import { useSelector, useDispatch } from "react-redux";
import { hangmanActions } from "../store/hangman-slice";
import { useNavigate } from "react-router-dom";

const HangMan = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.hangman.isPlaying);
  const { usedLetters, hiddenWord, attemptsLeft } = useSelector(
    (state) => state.hangman.currentGame
  );
  const guesses = usedLetters.length;

  const calcIsWordGuessed = () => {
    let correctLettersCount = 0;
    for (const index in hiddenWord) {
      if (usedLetters.indexOf(hiddenWord[index]) !== -1) {
        correctLettersCount += 1;
      }
    }
    return hiddenWord.length === correctLettersCount;
  };

  const isDefeat = isPlaying && attemptsLeft === 0 && !calcIsWordGuessed();
  const isVictory = isPlaying && calcIsWordGuessed();
  const isEndgame = isVictory || isDefeat;

  const restartHandler = () => {
    dispatch(hangmanActions.endGame());
  };

  const closeHandler = () => {
    restartHandler();
    navigate("/");
  };

  return (
    <Fragment>
      {!isPlaying && !isEndgame && <NewGame onClose={closeHandler} />}
      {isPlaying && (
        <Game
          attemptsLeft={attemptsLeft}
          isEndgame={isEndgame}
          onClose={closeHandler}
        />
      )}
      {isEndgame && (
        <Endgame
          isVictory={isVictory}
          guesses={guesses}
          word={hiddenWord}
          onRestart={restartHandler}
          onClose={closeHandler}
        />
      )}
    </Fragment>
  );
};

export default HangMan;

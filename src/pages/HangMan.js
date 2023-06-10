import { Fragment } from "react";

import Card from "../components/UI/Card";
import NewGameModal from "../components/HangMan/NewGameModal";
import Game from "../components/HangMan/Game";
import EndgameModal from "../components/HangMan/EndgameModal";
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
    dispatch(hangmanActions.endGame());
    navigate("/");
  };

  return (
    <Fragment>
      {!isPlaying && !isEndgame && <NewGameModal onClose={closeHandler} />}
      {isPlaying && !isEndgame && (
        <Card>
          <Game attemptsLeft={attemptsLeft} />
        </Card>
      )}
      {isEndgame && (
        <EndgameModal
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

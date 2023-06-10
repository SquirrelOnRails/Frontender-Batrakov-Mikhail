import { Fragment } from "react";

import Card from "../components/UI/Card";
import NewGameModal from "../components/HangMan/NewGameModal";
import Game from "../components/HangMan/Game";
import Endgame from "../components/HangMan/Endgame";
import { useSelector } from "react-redux";
import { useState } from "react";

const HangMan = () => {
  const isPlaying = useSelector((state) => state.hangman.isPlaying);
  const { usedLetters, hiddenWord, attemptsLeft } = useSelector(
    (state) => state.hangman.currentGame
  );
  const attemptsTaken = usedLetters.length;
  const [isEndgame, setIsEndgame] = useState(false);

  const calcIsWordGuessed = () => {
    let correctLettersCount = 0;
    for (const letter in hiddenWord) {
      if (usedLetters.findIndex(letter) !== -1) {
        correctLettersCount += 1;
      }
    }
    return hiddenWord.length === correctLettersCount;
  };

  const isVictory = attemptsLeft > 0 && calcIsWordGuessed();
  const isDefeat = attemptsLeft === 0;

  if (isVictory || isDefeat) {
    setIsEndgame(true);
  }

  return (
    <Fragment>
      {!isPlaying && !isEndgame && <NewGameModal />}
      {isPlaying && (
        <Card>
          <Game />
        </Card>
      )}
      {isEndgame && (
        <Endgame
          isVictory={isVictory}
          attempts={attemptsTaken}
          word={hiddenWord}
        />
      )}
    </Fragment>
  );
};

export default HangMan;

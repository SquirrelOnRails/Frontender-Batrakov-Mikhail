import { createSlice } from "@reduxjs/toolkit";

import getWord from "../code/getWord";

const hangmanInitialState = {
  currentGame: {
    hiddenWord: "",
    attemptsLeft: 0,
    usedLetters: [],
  },
  isPlaying: false,
};

const hangmanSlice = createSlice({
  name: "hangman",
  initialState: hangmanInitialState,
  reducers: {
    newGame: (state, action) => {
      const { attempts, wordLength } = action.payload;
      let newGameData = { ...hangmanInitialState.currentGame };
      newGameData.attemptsLeft = attempts;

      const word = getWord(wordLength);
      newGameData.hiddenWord = word.toUpperCase();

      state.currentGame = newGameData;
      state.isPlaying = true;
    },
    guessLetter: (state, action) => {
      const letter = action.payload ? action.payload.trim().toUpperCase() : "";
      if (!state.isPlaying) {
        console.error(
          "Can not guess a letter while the game is not in started state."
        );
      } else if (!letter || letter.length !== 1) {
        console.error(`Invalid guess value: "${action.payload}"`);
      } else if (!/^[A-Z]$/.test(letter)) {
        console.error(
          `Invalid guess character: "${action.payload}". Only english alphabet letters are allowed`
        );
      }

      state.currentGame.usedLetters.push(letter);

      const isLetterCorrect =
        state.currentGame.hiddenWord.indexOf(letter) !== -1;
      if (!isLetterCorrect) {
        state.currentGame.attemptsLeft -= 1;
      }
    },
    endGame: (state) => {
      state.isPlaying = false;
      state.currentGame = hangmanInitialState.currentGame;
    },
  },
});

export const hangmanActions = hangmanSlice.actions;

export default hangmanSlice.reducer;

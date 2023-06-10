import { createSlice } from "@reduxjs/toolkit";

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
      const { attempts, word } = action.payload;
      let newGameData = hangmanInitialState.currentGame;
      newGameData.attemptsLeft = attempts;
      newGameData.hiddenWord = word;

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
      } else if (/^[A-Z]$/.test(letter)) {
        console.error(
          `Invalid guess character: "${action.payload}". Only english alphabet letters are allowed`
        );
      }

      state.currentGame.usedLetters.push(letter);
    },
    endGame: (state) => {
      state.isPlaying = false;
      state.currentGame = hangmanInitialState.currentGame;
    },
  },
});

export const hangmanActions = hangmanSlice.actions;

export default hangmanSlice.reducer;

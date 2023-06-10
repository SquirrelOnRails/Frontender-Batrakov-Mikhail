import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks-slice";
import mainReducer from "./main-slice";
import hangmanReducer from "./hangman-slice";

const store = configureStore({
  reducer: {
    main: mainReducer,
    tasks: tasksReducer,
    hangman: hangmanReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import mainReducer from "./main-slice";
import tasksReducer from "./tasks-slice";
import hangmanReducer from "./hangman-slice";

const store = configureStore({
  reducer: {
    user: userReducer,
    main: mainReducer,
    tasks: tasksReducer,
    hangman: hangmanReducer,
  },
});

export default store;

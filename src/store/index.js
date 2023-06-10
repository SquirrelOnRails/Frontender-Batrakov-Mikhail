import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasks-slice";
import mainReducer from "./main-slice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    main: mainReducer,
  },
});

export default store;

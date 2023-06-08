import { createSlice } from "@reduxjs/toolkit";

const tasksInitialState = {
  list: [
    {
      id: "0",
      title: "To do a ToDo",
      description: "must finish the app",
      date: "2012-12-12",
      group: "Default",
      isFinished: false,
    },
    {
      id: "1",
      title: "To learn CSS",
      group: "Career",
      isFinished: false,
    },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: (state, action) => {
      let currentTasks = state.list;
      const newTask = action.payload;
      newTask.isFinished = false;
      const newTasks = currentTasks;
      newTasks.push(newTask);

      state.list = newTasks;
    },
    removeTask: (state, action) => {
      let currentTasks = state.list;
      const id = action.payload;
      const selectedIndex = currentTasks.findIndex((task) => task.id === id);
      if (selectedIndex < 0) {
        console.error(`unable to find task in state by id=${id}`);
        return;
      }
      const newTasks = currentTasks.filter((task) => task.id !== id);

      state.list = newTasks;
    },
    updateTask: (state, action) => {
      const currentTasks = state.list;
      const selectedIndex = currentTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (selectedIndex < 0) {
        console.log(`Task with id=${action.payload.id} doesn't exist in store`);
        return;
      }

      state.list[selectedIndex] = action.payload;
    },
    toggleFinished: (state, action) => {
      const id = action.payload;
      const selectedIndex = state.list.findIndex((task) => task.id === id);
      if (selectedIndex < 0) {
        console.error(`Unable to find task with id=${id} in state`);
        return;
      }

      state.list[selectedIndex].isFinished =
        !state.list[selectedIndex].isFinished;
    },
    sort: (state, action) => {
      let currentTasks = state.list;
      const { sortBy, direction } = action.payload;
      const directionKey = direction === "asc" ? 1 : -1;

      const newTasks = currentTasks.sort((a, b) => {
        return a[sortBy] > b[sortBy] ? directionKey : -directionKey;
      });

      state.list = newTasks;
    },
  },
});

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;

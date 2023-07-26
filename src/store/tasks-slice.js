import { createSlice } from "@reduxjs/toolkit";

import { FIREBASE_URL } from "../settings";
import { mainActions } from "./main-slice";

const tasksInitialState = {
  filter: {
    title: "",
    group: "",
    date: "",
    isFinished: false,
  },
  order: {
    title: "",
    group: "",
    date: "",
  },
  isListChanged: false,
  list: [],
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
      state.isListChanged = true;
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
      state.isListChanged = true;
    },
    updateTask: (state, action) => {
      const currentTasks = state.list;
      const selectedIndex = currentTasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (selectedIndex < 0) {
        console.error(
          `Task with id=${action.payload.id} doesn't exist in store`
        );
        return;
      }

      state.list[selectedIndex] = action.payload;
      state.isListChanged = true;
    },
    updateList: (state, action) => {
      const tasksObj = action.payload ?? tasksInitialState.list;

      let reformedTasksArr = [];
      for (const key in tasksObj) {
        reformedTasksArr.push({
          ...tasksObj[key],
          id: key,
        });
      }

      state.list = reformedTasksArr;
      state.isListChanged = false;
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
      state.isListChanged = true;
    },
    setOrder: (state, action) => {
      const { field, direction } = action.payload;
      if (!field || !direction) {
        return;
      }
      state.order[field] = direction;
    },
    clearOrder: (state) => {
      state.order = tasksInitialState.order;
    },
    setFilter: (state, action) => {
      const { field, value } = action.payload;
      state.filter[field] = value;
    },
    clearFilter: (state) => {
      state.filter = tasksInitialState.filter;
    },
  },
});

export const sendTasks = (tasksData = { tasks: [], email: "" }) => {
  return async (dispatch) => {
    const operationTitle = "Updating tasks";
    const { tasks, email } = tasksData;

    dispatch(
      mainActions.alert({
        message: "Executing request...",
        title: operationTitle,
        type: "pending",
      })
    );

    const sendRequest = async (tasks, email) => {
      const response = await fetch(`${FIREBASE_URL}/${email}/tasks.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(tasks),
      });

      if (!response.ok) {
        throw new Error(`Error during request execution: ${response.text()}`);
      }
    };

    try {
      await sendRequest(tasks, email);

      dispatch(
        mainActions.alert({
          message: "Tasks have been updated successfully!",
          title: operationTitle,
          type: "success",
        })
      );
    } catch (ex) {
      dispatch(
        mainActions.alert({
          message: ex.message,
          title: operationTitle,
          type: "error",
        })
      );
    }
  };
};

export const getTasks = (email) => {
  return async (dispatch) => {
    const operationTitle = "Retrieving tasks";

    const sendRequest = async () => {
      const response = await fetch(`${FIREBASE_URL}/${email}/tasks.json`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`Error during request execution: ${response.text()}`);
      }

      return response.json();
    };

    try {
      const tasks = await sendRequest();
      dispatch(tasksSlice.actions.updateList(tasks));
    } catch (ex) {
      dispatch(
        mainActions.alert({
          message: ex.message,
          title: operationTitle,
          type: "error",
        })
      );
    }
  };
};

export const tasksActions = tasksSlice.actions;

export default tasksSlice.reducer;

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

import "./index.css";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import ToDo from "./pages/ToDo";
import EditTask from "./pages/EditTask";
import HangMan from "./pages/HangMan";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/to-do",
        element: <ToDo />,
      },
      {
        path: "/to-do/:taskId",
        element: <EditTask />,
      },
      {
        path: "/hang-man",
        element: <HangMan />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

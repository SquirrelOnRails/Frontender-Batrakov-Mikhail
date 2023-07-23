import { useSelector, useDispatch } from "react-redux";
import { getTasks, sendTasks } from "../store/tasks-slice";
import { Fragment, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import NewTaskForm from "../components/ToDo/NewTaskForm";
import TasksList from "../components/ToDo/TasksList";
import Filter from "../components/ToDo/Filter";
import Card from "../components/UI/Card";
import Greeting from "../components/ToDo/Greeting";

let isAppLoadedFirstTime = true;

const ToDo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const isListChanged = useSelector((state) => state.tasks.isListChanged);
  const filter = useSelector((state) => state.tasks.filter);
  const order = useSelector((state) => state.tasks.order);
  const userInfo = useSelector((state) => state.user);
  const isUserLoggedIn = userInfo && userInfo.googleCredential;
  const userEmail =
    isUserLoggedIn &&
    userInfo.googleCredential.email
      .toLowerCase()
      .substring(0, userInfo.googleCredential.email.indexOf("@"));

  useEffect(() => {
    dispatch(getTasks(userEmail));
  }, [dispatch, userEmail]);

  useEffect(() => {
    if (isAppLoadedFirstTime) {
      isAppLoadedFirstTime = false;
      return;
    }
    if (!isListChanged) return;

    const payload = { tasks, email: userEmail };
    dispatch(sendTasks(payload));
  }, [tasks, isListChanged, userEmail, dispatch]);

  return (
    <Fragment>
      <Outlet />
      {!isUserLoggedIn && (
        <Fragment>
          <h2>This section is only available for logged in users.</h2>
          <p>
            You can log in by using <Link to="/login">this link</Link>.
          </p>
        </Fragment>
      )}
      {isUserLoggedIn && (
        <Fragment>
          <Greeting />
          <NewTaskForm />
          <Filter />
          <TasksList tasks={tasks} filter={filter} order={order} />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ToDo;

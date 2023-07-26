import { useSelector, useDispatch } from "react-redux";
import { getTasks, sendTasks } from "../store/tasks-slice";
import { Fragment, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

import NewTaskForm from "../components/ToDo/NewTaskForm";
import TasksList from "../components/ToDo/TasksList";
import Filter from "../components/ToDo/Filter";
import Greeting from "../components/ToDo/Greeting";

import styles from "./ToDo.module.scss";

let isAppLoadedFirstTime = true;

const ToDo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const tasksCount = tasks.length;
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
  }, [dispatch, userEmail, tasksCount]);

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
        <section className={styles.unauthorized}>
          <h2>This section is available to authorized users only.</h2>
          <p>
            You can Log In using <Link to="/login">this link</Link>.
          </p>
        </section>
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

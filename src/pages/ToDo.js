import { useSelector, useDispatch } from "react-redux";
import { getTasks, sendTasks } from "../store/tasks-slice";

import NewTaskForm from "../components/ToDo/NewTaskForm";
import TasksList from "../components/ToDo/TasksList";
import Filter from "../components/ToDo/Filter";
import { Fragment, useEffect } from "react";

let isAppLoadedFirstTime = true;

const ToDo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);
  const isListChanged = useSelector((state) => state.tasks.isListChanged);
  const filter = useSelector((state) => state.tasks.filter);
  const order = useSelector((state) => state.tasks.order);

  useEffect(() => {
    dispatch(getTasks());
  }, [dispatch]);

  useEffect(() => {
    if (isAppLoadedFirstTime) {
      isAppLoadedFirstTime = false;
      return;
    }
    if (!isListChanged) return;

    dispatch(sendTasks(tasks));
  }, [tasks, isListChanged, dispatch]);

  return (
    <Fragment>
      <NewTaskForm />
      <Filter />
      <TasksList tasks={tasks} filter={filter} order={order} />
    </Fragment>
  );
};

export default ToDo;

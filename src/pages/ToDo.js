import { useSelector, useDispatch } from "react-redux";
import { tasksActions } from "../store/tasks-slice";

import NewTaskForm from "../components/ToDo/NewTaskForm";
import TasksList from "../components/ToDo/TasksList";
import Filter from "../components/ToDo/Filter";

const ToDo = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.list);

  const newTaskSubmitHandler = (newTask) => {
    // TODO: send to server first
    newTask.id = Math.random().toString();
    dispatch(tasksActions.addTask(newTask));
  };

  return (
    <section>
      <NewTaskForm onSubmit={newTaskSubmitHandler} />
      <Filter />
      <TasksList tasks={tasks} />
    </section>
  );
};

export default ToDo;

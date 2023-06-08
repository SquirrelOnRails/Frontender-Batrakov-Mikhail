import { useDispatch } from "react-redux";
import { tasksActions } from "../../store/tasks-slice";
import { useLocation, useNavigate } from "react-router";

import Card from "../UI/Card";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const location = useLocation();
  const resolver = useNavigate();
  const dispatch = useDispatch();

  const tasks = props.tasks;

  const editTaskHandler = (taskId) => {
    resolver(`${location.pathname}/${taskId}`);
  };
  const removeTaskHandler = (taskId) => {
    dispatch(tasksActions.removeTask(taskId));
  };
  const finishTaskHandler = (taskId) => {
    dispatch(tasksActions.toggleFinished(taskId));
  };

  const tasksArr = tasks.map((task) => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        onEdit={() => editTaskHandler(task.id)}
        onRemove={() => removeTaskHandler(task.id)}
        onFinished={() => finishTaskHandler(task.id)}
      />
    );
  });

  return (
    <Card>
      <ul>{tasksArr}</ul>
    </Card>
  );
};

export default TasksList;

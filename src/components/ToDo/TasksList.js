import { useDispatch } from "react-redux";
import { tasksActions } from "../../store/tasks-slice";
import { useLocation, useNavigate } from "react-router";

import Card from "../UI/Card";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const location = useLocation();
  const resolver = useNavigate();
  const dispatch = useDispatch();

  const { tasks, filter, order } = props;

  const editTaskHandler = (taskId) => {
    resolver(`${location.pathname}/${taskId}`);
  };
  const removeTaskHandler = (taskId) => {
    dispatch(tasksActions.removeTask(taskId));
  };
  const finishTaskHandler = (taskId) => {
    dispatch(tasksActions.toggleFinished(taskId));
  };

  const filterTasks = (tasks) => {
    let result = tasks;
    if (filter.title) {
      result = result.filter(
        (task) =>
          task.title.toUpperCase().includes(filter.title.toUpperCase()) ||
          (task.description &&
            task.description.toUpperCase().includes(filter.title.toUpperCase()))
      );
    }
    if (filter.group) {
      result = result.filter(
        (task) =>
          task.group &&
          task.group.toUpperCase().includes(filter.group.toUpperCase())
      );
    }
    if (filter.date) {
      result = result.filter((task) => task.date && task.date === filter.date);
    }
    if (!filter.isFinished) {
      result = result.filter((task) => task.isFinished === false);
    }
    return result.filter((task) => !!task.id);
  };

  const orderTasks = (tasks) => {
    let result = tasks;
    if (order.title) {
      const directionKey = order.title === "asc" ? 1 : -1;
      result = result.sort((a, b) => {
        return a.title > b.title ? directionKey : -directionKey;
      });
    }
    if (order.group) {
      const directionKey = order.group === "asc" ? 1 : -1;
      result = result.sort((a, b) => {
        return a.group > b.group ? directionKey : -directionKey;
      });
    }
    if (order.date) {
      const directionKey = order.date === "asc" ? 1 : -1;
      result = result.sort((a, b) => {
        return a.date > b.date ? directionKey : -directionKey;
      });
    }
    return result;
  };

  const filteredOrderedTasks = orderTasks(filterTasks(tasks));
  const tasksArr = filteredOrderedTasks.map((task) => {
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

  return <ul>{tasksArr}</ul>;
};

export default TasksList;

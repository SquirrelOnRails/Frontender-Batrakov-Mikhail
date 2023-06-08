import Card from "../UI/Card";
import Filter from "./Filter";
import TaskItem from "./TaskItem";

const TasksList = (props) => {
  const tasks = props.tasks;

  const tasksArr = tasks.map((task) => {
    return <TaskItem key={task.id} task={task} />;
  });

  return (
    <Card>
      <Filter />
      <ul>{tasksArr}</ul>
    </Card>
  );
};

export default TasksList;

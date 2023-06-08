import NewTaskForm from "../components/ToDo/NewTaskForm";
import TasksList from "../components/ToDo/TasksList";

const ToDo = () => {
  const dummyTasks = [
    {
      id: "0",
      title: "To do a ToDo",
      description: "must finish the app",
      date: Date.now(),
      group: "Default",
    },
    {
      id: "1",
      title: "To learn CSS",
      group: "Career",
    },
  ];

  return (
    <section>
      <NewTaskForm />
      <TasksList tasks={dummyTasks} />
    </section>
  );
};

export default ToDo;

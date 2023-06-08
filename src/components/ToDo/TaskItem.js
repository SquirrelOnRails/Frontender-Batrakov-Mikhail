import Card from "../UI/Card";

const TaskItem = (props) => {
  const { title, description, group, date } = props.task;

  return (
    <Card>
      <p>{title}</p>
      {description && <p>{description}</p>}
      {date && <p>{date}</p>}
      {group && <p>{group}</p>}
      <div>
        <button>Edit</button>
        <button>Remove</button>
        <button>Set Finished</button>
      </div>
    </Card>
  );
};

export default TaskItem;

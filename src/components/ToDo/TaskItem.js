import Card from "../UI/Card";
import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const { title, description, group, date, isFinished } = props.task;
  const isExpired = !isFinished && date && new Date(date) < new Date();
  console.log(date);
  console.log(isExpired);

  return (
    <Card
      className={`${styles.task} ${isFinished && styles.finished} ${
        isExpired && styles.expired
      }`}
    >
      <div>
        <p>{title}</p>
        {description && <p>{description}</p>}
        {date && <p>{date}</p>}
        {group && <p>{group}</p>}
      </div>
      <div>
        <button onClick={props.onEdit}>Edit</button>
        <button onClick={props.onRemove}>Remove</button>
        {!isFinished && (
          <button onClick={props.onFinished}>Set Finished</button>
        )}
        {isFinished && (
          <button onClick={props.onFinished}>Set Uninished</button>
        )}
      </div>
    </Card>
  );
};

export default TaskItem;

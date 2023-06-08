import Card from "../UI/Card";
import styles from "./TaskItem.module.css";

const TaskItem = (props) => {
  const { title, description, group, date, isFinished } = props.task;
  const isExpired = !isFinished && date && new Date(date) < new Date();

  return (
    <Card
      className={`${styles.task} ${isFinished && styles.finished} ${
        isExpired && styles.expired
      }`}
    >
      <div>
        <p>{title}</p>
        {description && (
          <div>
            <label>description: </label>
            <span>{description}</span>
          </div>
        )}
        {date && (
          <div>
            <label>date: </label>
            <span>{date}</span>
          </div>
        )}
        {group && (
          <div>
            <label>group: </label>
            <span>{group}</span>
          </div>
        )}
      </div>
      <div>
        <button onClick={props.onEdit}>Edit</button>
        <button onClick={props.onRemove}>Remove</button>
        <button onClick={props.onFinished}>
          Set {isFinished ? "Unfinished" : "Finished"}
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;

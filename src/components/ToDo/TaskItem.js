import Card from "../UI/Card";
import styles from "./TaskItem.module.scss";

const TaskItem = (props) => {
  const { title, description, group, date, isFinished } = props.task;
  const isExpired = !isFinished && date && new Date(date) < new Date();

  return (
    <Card
      className={`${styles.task} ${isFinished && styles.finished} ${
        isExpired && styles.expired
      }`}
    >
      <div className={styles.content}>
        <h3>{title}</h3>
        {description && (
          <div className={styles.description}>
            <label>description: </label>
            <p>{description}</p>
          </div>
        )}
        {date && (
          <div className={styles.date}>
            <label>date: </label>
            <p>{date}</p>
          </div>
        )}
        {group && (
          <div className={styles.group}>
            <label>group: </label>
            <p>{group}</p>
          </div>
        )}
      </div>
      <div className={styles.controlls}>
        <button className={styles.edit} onClick={props.onEdit}>
          Edit
        </button>
        <button className={styles.remove} onClick={props.onRemove}>
          Remove
        </button>
        <button className={styles.finished} onClick={props.onFinished}>
          Set {isFinished ? "Unfinished" : "Finished"}
        </button>
      </div>
    </Card>
  );
};

export default TaskItem;

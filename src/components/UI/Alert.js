import styles from "./Alert.module.css";

const Alert = (props) => {
  const alertTypeClass = styles[props.type];
  return (
    <div className={`${styles.alert} ${alertTypeClass}`}>
      <label>{props.title}</label>
      <span>{props.message}</span>
      <button onClick={props.onClose}>X</button>
    </div>
  );
};

export default Alert;

import styles from "./Alert.module.scss";

const Alert = (props) => {
  const alertTypeClass = styles[props.type];
  return (
    <div
      onClick={props.onClose}
      className={`${styles.alert} ${alertTypeClass}`}
    >
      <label>{props.title}</label>
      <p className={styles.para}>{props.message}</p>
      <p className={styles.hint}>tap anywhere to close</p>
    </div>
  );
};

export default Alert;

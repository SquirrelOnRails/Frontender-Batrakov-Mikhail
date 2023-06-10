import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  const className = `${styles.modal} ${props.className}`;
  return <Card className={className}>{props.children}</Card>;
};

export default Modal;

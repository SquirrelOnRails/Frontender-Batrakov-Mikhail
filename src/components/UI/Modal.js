import { Fragment } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={styles.backdrop} />;
};

const portalElement = document.getElementById("modal");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={styles.modal}>
          <div className={styles.content}>{props.children}</div>
        </div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;

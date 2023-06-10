import { Fragment } from "react";
import ReactDOM from "react-dom";

import Modal from "../UI/Modal";
import Rules from "./Rules";
import NewGameForm from "./NewGameForm";

const NewGameModal = () => {
  const modalElement = document.getElementById("modal");
  return (
    <Fragment>
      {ReactDOM.createPortal(<h1>backdpor</h1>, modalElement)}
      {ReactDOM.createPortal(
        <Modal>
          <Rules />
          <NewGameForm />
        </Modal>,
        modalElement
      )}
      <h1>Hang Man!</h1>
    </Fragment>
  );
};

export default NewGameModal;

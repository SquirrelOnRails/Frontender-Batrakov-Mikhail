import Modal from "../UI/Modal";
import Rules from "./Rules";
import NewGameForm from "./NewGameForm";

const NewGameModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <Rules />
      <NewGameForm />
      <button onClick={props.onClose}>Leave game</button>
    </Modal>
  );
};

export default NewGameModal;

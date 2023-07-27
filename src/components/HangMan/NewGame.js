import Rules from "./Rules";
import NewGameForm from "./NewGameForm";
import { Fragment } from "react";

import styles from "./NewGame.module.scss";

const NewGame = (props) => {
  return (
    <Fragment>
      <Rules />
      <NewGameForm onClose={props.onClose} />
    </Fragment>
  );
};

export default NewGame;

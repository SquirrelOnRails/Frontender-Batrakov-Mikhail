import Rules from "./Rules";
import NewGameForm from "./NewGameForm";
import { Fragment } from "react";

import styles from "./NewGame.module.scss";

const NewGame = (props) => {
  return (
    <Fragment>
      <Rules />
      <NewGameForm />
      <section className={styles["controlls"]}>
        <button onClick={props.onClose}>Leave game</button>
      </section>
    </Fragment>
  );
};

export default NewGame;

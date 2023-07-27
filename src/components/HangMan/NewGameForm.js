import { useState } from "react";
import { useDispatch } from "react-redux";
import { hangmanActions } from "../../store/hangman-slice";

import styles from "./NewGameForm.module.scss";

const NewGameForm = (props) => {
  const dispatch = useDispatch();
  const [length, setLength] = useState(6);
  const [attempts, setAttempts] = useState(8);

  const setGamemodeHandler = (gamemode) => {
    switch (gamemode) {
      case "easy":
        setLength(6);
        setAttempts(8);
        return;
      case "normal":
        setLength(7);
        setAttempts(7);
        return;
      case "difficult":
        setLength(8);
        setAttempts(6);
        return;
      default:
        return;
    }
  };

  const lengthChangeHandler = (event) => {
    setLength(event.target.value);
  };
  const attemptsChangeHandler = (event) => {
    setAttempts(event.target.value);
  };

  const startGameHandler = () => {
    dispatch(
      hangmanActions.newGame({ attempts: attempts, wordLength: length })
    );
  };

  const lengthOptions = [6, 7, 8].map((val) => (
    <option key={val} value={val}>
      {val}
    </option>
  ));

  const attemptsOptions = [6, 7, 8].map((val) => (
    <option key={val} value={val}>
      {val}
    </option>
  ));

  return (
    <section className={styles["new-game"]}>
      <form onSubmit={startGameHandler}>
        <div className={styles.presets}>
          <button onClick={() => setGamemodeHandler("easy")} type="button">
            Easy
          </button>
          <button onClick={() => setGamemodeHandler("normal")} type="button">
            Normal
          </button>
          <button onClick={() => setGamemodeHandler("difficult")} type="button">
            Difficult
          </button>
        </div>
        <div className={styles["word-length"]}>
          <label htmlFor="length">Word length: </label>
          <select id="length" value={length} onChange={lengthChangeHandler}>
            {lengthOptions}
          </select>
        </div>
        <div className={styles["attempts"]}>
          <label htmlFor="attempts">Attempts: </label>
          <select
            id="attempts"
            value={attempts}
            onChange={attemptsChangeHandler}
          >
            {attemptsOptions}
          </select>
        </div>
        <div className={styles.controlls}>
          <button type="submit">Start</button>
          <button type="button" onClick={props.onClose}>
            Leave game
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewGameForm;

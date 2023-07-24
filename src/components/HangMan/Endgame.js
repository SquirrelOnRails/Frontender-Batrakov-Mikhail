import styles from "./Endgame.module.scss";

const Endgame = (props) => {
  const { isVictory, guesses, word } = props;
  const victoryText = "You win! Gongrats with the victory!";
  const defeatText = "You lose. Unfortunately, you ran out of attempts.";

  return (
    <section className={styles.endgame}>
      <h2>{isVictory ? victoryText : defeatText}</h2>
      <p className={styles.reveal}>
        The word was: <span>{word}</span>
      </p>
      {isVictory && (
        <p className={styles.details}>
          It took you <span>{guesses}</span> guesses to reveal the word, good
          job!
        </p>
      )}
      <div className={styles.controlls}>
        <button className={styles.restart} onClick={props.onRestart}>
          Restart
        </button>
        <button className={styles["leave-game"]} onClick={props.onClose}>
          Leave Game
        </button>
      </div>
    </section>
  );
};

export default Endgame;

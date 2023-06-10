import Modal from "../UI/Modal";

const EndgameModal = (props) => {
  const { isVictory, guesses, word } = props;
  const victoryText = "You win! Gongrats with the victory!";
  const defeatText = "You lose. Unfortunately, you ran out of attempts.";

  return (
    <Modal onClose={props.onClose}>
      <h2>{isVictory ? victoryText : defeatText}</h2>
      <p>
        The word was: <span>{word}</span>
      </p>
      {isVictory && (
        <span>
          It took you <span>{guesses}</span> guesses to reveal the word, good
          job!
        </span>
      )}
      <div>
        <button onClick={props.onRestart}>Restart</button>
      </div>
    </Modal>
  );
};

export default EndgameModal;

import Modal from "../UI/Modal";

const Endgame = (props) => {
  const { isVictory, attempts, word } = props;
  const victoryText = "You win! Gongrats with the victory!";
  const defeatText = "You lose. Unfortunately, you ran out of attempts.";

  return (
    <Modal>
      <p>{isVictory ? victoryText : defeatText}</p>
      <span>
        The word was: <span>{word}</span>
      </span>
      {isVictory && (
        <span>
          It took you <span>{attempts}</span> attempts to guess the word, good
          job!
        </span>
      )}
    </Modal>
  );
};

export default Endgame;

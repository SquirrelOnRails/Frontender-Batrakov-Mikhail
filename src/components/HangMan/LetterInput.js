import useInput from "../../hooks/use-input";

import styles from "./LetterInput.module.scss";

const LetterInput = (props) => {
  const {
    value: letter,
    setValue: setLetter,
    isValid,
  } = useInput((val) => /^[A-Z]$/.test(val), "");

  const onInputChange = (event) => {
    const inputLetter = event.target.value.toUpperCase();
    setLetter(inputLetter);
  };

  const letterSubmitHandler = (event) => {
    event.preventDefault();
    setLetter("");
    if (!isValid) return;

    props.onSubmit(letter);
  };

  return (
    <section className={styles["letter-input"]}>
      <form onSubmit={letterSubmitHandler}>
        <div className={styles.field}>
          <label>Guess the letter: </label>
          <input
            type="text"
            maxLength="1"
            onChange={onInputChange}
            value={letter}
          />
          <button type="submit" disabled={!isValid}>
            Submit letter
          </button>
        </div>
        {!isValid && (
          <p className="error">Please, provide an english letter!</p>
        )}
      </form>
    </section>
  );
};

export default LetterInput;

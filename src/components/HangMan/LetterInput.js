import { useState } from "react";

import useInput from "../../hooks/use-input";

const LetterInput = (props) => {
  // onSubmit

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
    if (!isValid) return;

    props.onSubmit(letter);
  };

  return (
    <form onSubmit={letterSubmitHandler}>
      <label>Guess the letter: </label>
      <input
        type="text"
        maxLength="1"
        onChange={onInputChange}
        value={letter}
      />
      {!isValid && <p className="error">Please, provide an english letter!</p>}
      <div>
        <button type="submit" disabled={!isValid}>
          Submit letter
        </button>
      </div>
    </form>
  );
};

export default LetterInput;

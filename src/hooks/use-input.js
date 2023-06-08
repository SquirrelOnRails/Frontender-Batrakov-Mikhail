import { useState } from "react";

const useInput = (validateFn) => {
  const [value, setValue] = useState("");
  const [isToutched, setIsToutched] = useState("");
  const isValid = validateFn(value);

  return {
    value,
    setValue,
    isToutched,
    setIsToutched,
    isValid,
  };
};

export default useInput;

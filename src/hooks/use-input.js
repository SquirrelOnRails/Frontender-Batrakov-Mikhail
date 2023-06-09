import { useState } from "react";

const useInput = (validateFn, defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);
  const [isToutched, setIsToutched] = useState(false);
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

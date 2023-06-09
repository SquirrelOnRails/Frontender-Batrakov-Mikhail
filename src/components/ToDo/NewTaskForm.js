import Card from "../UI/Card";
import useInput from "../../hooks/use-input";

const NewTaskForm = (props) => {
  const {
    value: title,
    setValue: setTitle,
    isToutched: isTitleToutched,
    setIsToutched: setIsTitleToutched,
    isValid: isTitleValid,
  } = useInput((val) => val.trim().length !== 0);
  const {
    value: description,
    setValue: setDescription,
    isToutched: isDescriptionToutched,
    setIsToutched: setIsDescriptionToutched,
    isValid: isDescriptionValid,
  } = useInput((val) => true);
  const {
    value: group,
    setValue: setGroup,
    isToutched: isGroupToutched,
    setIsToutched: setIsGroupToutched,
    isValid: isGroupValid,
  } = useInput((val) => val.trim().length !== 0);
  const {
    value: date,
    setValue: setDate,
    isToutched: isDateToutched,
    setIsToutched: setIsDateToutched,
    isValid: isDateValid,
  } = useInput((val) => {
    if (val === "") return true;
    const selectedDate = new Date(Date.parse(val));
    if (!selectedDate) return false;
    const today = new Date().setHours(0, 0, 0, 0);

    return selectedDate >= today;
  });

  const isFormValid =
    isTitleValid && isDescriptionValid && isGroupValid && isDateValid;

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
    setIsTitleToutched(true);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
    setIsDescriptionToutched(true);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    setIsDateToutched(true);
  };
  const groupChangeHandler = (event) => {
    setGroup(event.target.value);
    setIsGroupToutched(true);
  };

  const titleBlurHandler = () => {
    setIsTitleToutched(true);
  };
  const descriptionBlurHandler = () => {
    setIsDescriptionToutched(true);
  };
  const dateBlurHandler = () => {
    setIsDateToutched(true);
  };
  const groupBlurHandler = () => {
    setIsGroupToutched(true);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      setIsTitleToutched(true);
      setIsDescriptionToutched(true);
      setIsGroupToutched(true);
      setIsDateToutched(true);
      return;
    }

    const newTask = {
      title,
      description,
      group,
      date,
    };
    props.onSubmit(newTask);
    resetFormHandler();
  };
  const resetFormHandler = () => {
    setTitle("");
    setDescription("");
    setGroup("");
    setDate("");

    setIsTitleToutched(false);
    setIsDescriptionToutched(false);
    setIsGroupToutched(false);
    setIsDateToutched(false);
  };

  return (
    <Card>
      <form onSubmit={submitFormHandler} onReset={resetFormHandler}>
        <div>
          <label htmlFor="title">Task Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={titleChangeHandler}
            onBlur={titleBlurHandler}
          />
          {!isTitleValid && isTitleToutched && (
            <p className="error-message">Title should not be empty</p>
          )}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows="2"
            value={description}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
          />
          {!isDescriptionValid && isDescriptionToutched && (
            <p className="error-message">
              Please enter valid value for the Description
            </p>
          )}
        </div>
        <div>
          <label htmlFor="group">Group</label>
          <input
            id="group"
            type="text"
            value={group}
            onChange={groupChangeHandler}
            onBlur={groupBlurHandler}
          />
          {!isGroupValid && isGroupToutched && (
            <p className="error-message">Group should not be empty</p>
          )}
        </div>
        <div>
          <label htmlFor="date">Till date</label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={dateChangeHandler}
            onBlur={dateBlurHandler}
          />
          {!isDateValid && isDateToutched && (
            <p className="error-message">
              Date should not be prior current date
            </p>
          )}
        </div>
        <div>
          <button type="submit">Submit</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </Card>
  );
};

export default NewTaskForm;

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import Card from "../components/UI/Card";
import useInput from "../hooks/use-input";
import { tasksActions } from "../store/tasks-slice";

const EditTask = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const taskId = params.taskId;
  const navigate = useNavigate();
  const task = useSelector((state) =>
    state.tasks.list.find((t) => t.id === taskId)
  );

  const {
    value: title,
    setValue: setTitle,
    isValid: isTitleValid,
  } = useInput((val) => val.trim().length !== 0, task.title);
  const {
    value: description,
    setValue: setDescription,
    isValid: isDescriptionValid,
  } = useInput((val) => true, task.description);
  const {
    value: group,
    setValue: setGroup,
    isValid: isGroupValid,
  } = useInput((val) => true, task.group);
  const {
    value: date,
    setValue: setDate,
    isValid: isDateValid,
  } = useInput((val) => {
    if (val === "") return true;
    const selectedDate = new Date(Date.parse(val));
    if (!selectedDate) return false;
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    return selectedDate >= today;
  }, task.date);

  const isFormValid =
    isTitleValid && isDescriptionValid && isDateValid && isGroupValid;

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const groupChangeHandler = (event) => {
    setGroup(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const cancelHandler = () => {
    navigate("/to-do");
  };
  const updateTaskHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      console.error("Given inputs didn't passed validation");
      return;
    }

    const updatedTask = {
      id: taskId,
      title,
      description,
      group,
      date,
    };
    dispatch(tasksActions.updateTask(updatedTask));
    navigate("/to-do");
  };

  if (!task) {
    return <p>Task not found</p>;
  }

  return (
    <Card>
      <p>Edit task</p>
      <form onSubmit={updateTaskHandler}>
        <input type="hidden" id="taskId" value={taskId} />
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" value={title} onChange={titleChangeHandler} />
          {!isTitleValid && <p>Please, enter a title</p>}
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            value={description}
            onChange={descriptionChangeHandler}
          />
          {!isDescriptionValid && <p>Description is invalid</p>}
        </div>
        <div>
          <label htmlFor="date">Till date</label>
          <input
            id="date"
            value={date}
            type="date"
            onChange={dateChangeHandler}
          />
          {!isDateValid && <p>Date should not be prior current date</p>}
        </div>
        <div>
          <label htmlFor="group">Group</label>
          <input id="group" value={group} onChange={groupChangeHandler} />
          {!isGroupValid && <p>Please, enter a valid group value</p>}
        </div>
        <div>
          <button type="submit">Update</button>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
        </div>
      </form>
    </Card>
  );
};

export default EditTask;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks-slice";
import Card from "../UI/Card";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);
  const [isFinished, setIsFinished] = useState(filter.isFinished);

  const onTitleDescrFilterChange = (event) => {
    dispatch(
      tasksActions.setFilter({
        field: "title",
        value: event.target.value,
      })
    );
  };
  const onGroupFilterChange = (event) => {
    dispatch(
      tasksActions.setFilter({
        field: "group",
        value: event.target.value,
      })
    );
  };
  const onDateFilterChange = (event) => {
    dispatch(
      tasksActions.setFilter({
        field: "date",
        value: event.target.value,
      })
    );
  };
  const onFinishedFilterChange = (event) => {
    setIsFinished(!isFinished);
    dispatch(
      tasksActions.setFilter({
        field: "isFinished",
        value: !isFinished,
      })
    );
  };
  const clearFilterHandler = () => {
    dispatch(tasksActions.clearFilter());
  };

  return (
    <Card>
      <form>
        <div>
          <label htmlFor="titleDescr">Title / Description</label>
          <input
            id="titleDescr"
            type="text"
            value={filter.title}
            onChange={onTitleDescrFilterChange}
          />
          <button type="button">Sort</button>
        </div>
        <div>
          <label htmlFor="group">Group</label>
          <input
            id="group"
            type="text"
            value={filter.group}
            onChange={onGroupFilterChange}
          />
          <button type="button">Sort</button>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={filter.date}
            onChange={onDateFilterChange}
          />
          <button type="button">Sort</button>
        </div>
        <div>
          <button type="button" onClick={onFinishedFilterChange}>
            {isFinished ? "Exclude" : "Include"} finished
          </button>
        </div>
        <div>
          <button onClick={clearFilterHandler} type="button">
            Clear
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Filter;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks-slice";
import Card from "../UI/Card";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);
  const [isFinished, setIsFinished] = useState(filter.isFinished);

  const [isTitleSortAsc, setIsTitleSortAsc] = useState(false);
  const [isGroupSortAsc, setIsGroupSortAsc] = useState(false);
  const [isDateSortAsc, setIsDateSortAsc] = useState(false);

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

  const sortTitleHandler = () => {
    const direction = isTitleSortAsc ? "desc" : "asc";
    setIsTitleSortAsc(!isTitleSortAsc);
    dispatch(
      tasksActions.sort({
        sortBy: "title",
        direction: direction,
      })
    );
  };
  const sortGroupHandler = () => {
    const direction = isGroupSortAsc ? "desc" : "asc";
    setIsGroupSortAsc(!isGroupSortAsc);
    dispatch(
      tasksActions.sort({
        sortBy: "group",
        direction: direction,
      })
    );
  };
  const sortDateHandler = () => {
    const direction = isDateSortAsc ? "desc" : "asc";
    setIsDateSortAsc(!isDateSortAsc);
    dispatch(
      tasksActions.sort({
        sortBy: "date",
        direction: direction,
      })
    );
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
          <button onClick={sortTitleHandler} type="button">
            Sort {isTitleSortAsc ? "descending" : "ascending"}
          </button>
        </div>
        <div>
          <label htmlFor="group">Group</label>
          <input
            id="group"
            type="text"
            value={filter.group}
            onChange={onGroupFilterChange}
          />
          <button onClick={sortGroupHandler} type="button">
            Sort {isGroupSortAsc ? "descending" : "ascending"}
          </button>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            value={filter.date}
            onChange={onDateFilterChange}
          />
          <button onClick={sortDateHandler} type="button">
            Sort {isDateSortAsc ? "descending" : "ascending"}
          </button>
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

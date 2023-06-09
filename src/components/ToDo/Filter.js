import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksActions } from "../../store/tasks-slice";
import Card from "../UI/Card";

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.tasks.filter);
  const [isFinished, setIsFinished] = useState(filter.isFinished);
  const {
    title: titleOrder,
    group: groupOrder,
    date: dateOrder,
  } = useSelector((state) => state.tasks.order);
  const taskGroups = useSelector((state) => {
    const groups = state.tasks.list.map((task) => task.group);
    return [...new Set(groups)];
  });

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
        value: event.target.value === "unset" ? "" : event.target.value,
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
  const onFinishedFilterChange = () => {
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
    dispatch(tasksActions.clearOrder());
  };

  const orderTitleHandler = () => {
    const newDirection = titleOrder === "asc" ? "desc" : "asc";
    dispatch(
      tasksActions.setOrder({
        field: "title",
        direction: newDirection,
      })
    );
  };
  const orderGroupHandler = () => {
    const newDirection = groupOrder === "asc" ? "desc" : "asc";
    dispatch(
      tasksActions.setOrder({
        field: "group",
        direction: newDirection,
      })
    );
  };
  const orderDateHandler = () => {
    const newDirection = dateOrder === "asc" ? "desc" : "asc";
    dispatch(
      tasksActions.setOrder({
        field: "date",
        direction: newDirection,
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
          <button onClick={orderTitleHandler} type="button">
            Order {titleOrder && `(current: ${titleOrder})`}
          </button>
        </div>
        <div>
          <label htmlFor="group">Group</label>
          <select onChange={onGroupFilterChange}>
            <option key="unset" value="unset">
              (any)
            </option>
            {taskGroups.map((group) => (
              <option key={group} value={group}>
                {group}
              </option>
            ))}
          </select>
          <button onClick={orderGroupHandler} type="button">
            Order {groupOrder && `(current: ${groupOrder})`}
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
          <button onClick={orderDateHandler} type="button">
            Order {dateOrder && `(current: ${dateOrder})`}
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

import Card from "../UI/Card";

const Filter = () => {
  const onTitleDescrFilterChange = (event) => {};
  const onGroupFilterChange = (event) => {};
  const onDateFilterChange = (event) => {};
  const onFinishedFilterChange = (event) => {};

  return (
    <Card>
      <form>
        <div>
          <label htmlFor="titleDescr">Title / Description</label>
          <input
            id="titleDescr"
            type="text"
            onChange={onTitleDescrFilterChange}
          />
          <button type="button">Sort</button>
        </div>
        <div>
          <label htmlFor="group">Group</label>
          <input id="group" type="text" onChange={onGroupFilterChange} />
          <button type="button">Sort</button>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input id="date" type="date" onChange={onDateFilterChange} />
          <button type="button">Sort</button>
        </div>
        <div>
          <label htmlFor="finished">Include finished</label>
          <input
            id="finished"
            type="checkbox"
            onChange={onFinishedFilterChange}
          />
        </div>
      </form>
    </Card>
  );
};

export default Filter;

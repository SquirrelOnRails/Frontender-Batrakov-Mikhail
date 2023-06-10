const NewGameForm = (props) => {
  return (
    <form onSubmit={props.startGameHandler}>
      <div>
        <label htmlFor="length">Word length: </label>
        <select id="length">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div>
        <label htmlFor="attempts">Attempts: </label>
        <select id="attempts">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div>
        <button type="button">Easy</button>
        <button type="button">Normal</button>
        <button type="button">Difficult</button>
        <button type="submit">Start</button>
      </div>
    </form>
  );
};

export default NewGameForm;

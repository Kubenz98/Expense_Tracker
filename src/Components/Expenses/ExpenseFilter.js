import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {

  const selectedYearHandler = (event) => {
    props.onSelectYear(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__controls">
        <label>Filter by year</label>
        <select onChange={selectedYearHandler} value={props.selected}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;

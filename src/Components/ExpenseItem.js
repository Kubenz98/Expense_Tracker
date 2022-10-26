import ExpensesDate from "./ExpensesDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <div className="expense-item">
        <ExpensesDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    </li>
  );
};

export default ExpenseItem;

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpensesList = (props) => {
  return (
    <ul className="expenses__list">
      {props.expenses.length > 0 && props.expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      {props.expenses.length === 0 && <h2>No expenses found.</h2>}
    </ul>
  );
};

export default ExpensesList;

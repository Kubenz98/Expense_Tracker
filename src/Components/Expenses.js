import ExpensesList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <div className="expenses">
      <ExpensesList expenses={props.expenses} />
    </div>
  );
};

export default Expenses;

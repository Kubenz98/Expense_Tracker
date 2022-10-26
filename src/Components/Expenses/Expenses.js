import Card from "../UI/Card";
import ExpensesList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <ExpensesList expenses={props.expenses} />
    </Card>
  );
};

export default Expenses;

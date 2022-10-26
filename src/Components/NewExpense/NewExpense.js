import Card from "../UI/Card";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseHandler = (expense) => {
    props.onAddExpense(expense);
  };

  return (
    <Card className="new-expense">
      <NewExpenseForm onAddExpense={newExpenseHandler} />
    </Card>
  );
};

export default NewExpense;

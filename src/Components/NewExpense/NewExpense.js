import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseHandler = (expense) => {
    props.onAddExpense(expense);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onAddExpense={newExpenseHandler} />
    </div>
  );
};

export default NewExpense;

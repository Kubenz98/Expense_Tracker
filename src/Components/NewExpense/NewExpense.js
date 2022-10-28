import React, { useState } from "react";
import Card from "../UI/Card";
import NewExpenseForm from "./NewExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const newExpenseHandler = (expense) => {
    if (expense.title.length > 16) {
      expense.title = expense.title.substring(0, 15) + "...";
      alert("The title is too long. Has been shortened")
    }
    props.onAddExpense(expense);
  };

  const [isEditing, setIsEditing] = useState(false);

  const editingHandler = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Card className="new-expense">
      {isEditing && (
        <NewExpenseForm
          onAddExpense={newExpenseHandler}
          onChangeEdit={editingHandler}
        />
      )}
      <div className="new-expense__controls">
        {!isEditing && (
          <button type="button" onClick={editingHandler}>
            Add New Expense
          </button>
        )}
      </div>
    </Card>
  );
};

export default NewExpense;

import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const changeDateHandler = (event) => {
    setDate(event.target.value);
  };

  const submitExpense = (event) => {
    event.preventDefault();
    if(enteredTitle.trim().length <= 0) {
      alert("Enter a valid title, please.")
      return
      
    }
    const newExpense = {
      id: Math.random(),
      title: enteredTitle.trim(),
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    if(!enteredTitle || !enteredAmount || !enteredDate) {
      return alert("Invalid expense! Fill all inputs!")
    }
    props.onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
    props.onChangeEdit();
  };

  return (
    <form onSubmit={submitExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={changeTitleHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={changeAmountHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={changeDateHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onChangeEdit}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;

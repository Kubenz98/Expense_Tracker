import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [enteredYear, setYear] = useState(2022);
  const selectedYearHandler = (year) => {
    setYear(year * 1);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() === enteredYear
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onSelectYear={selectedYearHandler}
        selected={enteredYear}
      />
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

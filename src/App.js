import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: 0,
    title: "New TV",
    amount: 699.49,
    date: new Date(2022, 2, 10),
  },
  {
    id: 1,
    title: "Dentist",
    amount: 200,
    date: new Date(2022, 5, 24),
  },
  {
    id: 2,
    title: "Car service",
    amount: 499.99,
    date: new Date(2022, 8, 18),
  },
  {
    id: 3,
    title: "Car Insurance",
    amount: 269.99,
    date: new Date(2021, 4, 8),
  },
  {
    id: 4,
    title: "New Desk",
    amount: 449.99,
    date: new Date(2021, 9, 3),
  },
  {
    id: 5,
    title: "Food",
    amount: 823.76,
    date: new Date(2021, 6, 15),
  },
  {
    id: 6,
    title: "Room Renovation",
    amount: 1168.29,
    date: new Date(2021, 1, 3),
  },
];

function App() {
  const [expenses, addExpense] = useState(dummy_expenses);

  const newExpenseHandler = (expense) => {
    addExpense((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;

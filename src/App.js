import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const data = [
  {
    id: 0,
    title: "New TV",
    amount: 500,
    date: new Date(2022, 2, 10),
  },
  {
    id: 1,
    title: "Book",
    amount: 29.99,
    date: new Date(2022, 5, 18),
  },
  {
    id: 2,
    title: "Car Insurance",
    amount: 269.99,
    date: new Date(2022, 4, 8),
  },
  {
    id: 3,
    title: "New Desk",
    amount: 449.99,
    date: new Date(2022, 9, 3),
  },
];

  const newExpenseHandler = (expense) => {
    console.log(expense);
    
  }

function App() {
  return (
    <div>
      <NewExpense onAddExpense={newExpenseHandler}/>
      <Expenses expenses={data} />
    </div>
  );
}

export default App;

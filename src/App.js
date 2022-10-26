import Expenses from "./Components/Expenses";

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

function App() {
  return (
    <div>
      <Expenses expenses={data} />
    </div>
  );
}

export default App;

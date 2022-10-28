import './ExpenseChart.css'
import Chart from "../Chart/Chart";
const ExpenseChart = (props) => {
  let dataPoints = [
    { label: "1", value: 0 },
    { label: "2", value: 0 },
    { label: "3", value: 0 },
    { label: "4", value: 0 },
    { label: "5", value: 0 },
    { label: "6", value: 0 },
    { label: "7", value: 0 },
    { label: "8", value: 0 },
    { label: "9", value: 0 },
    { label: "10", value: 0 },
    { label: "11", value: 0 },
    { label: "12", value: 0 },
  ];

  for (const item of props.expenses) {
    const month = item.date.getMonth();

    dataPoints[month].value += item.amount * 1;
  }
  const dataPointValues = dataPoints.map((datapoint) => datapoint.value);
  const sum = dataPointValues.reduce((a, b) => a + b, 0);

  return (
    <div className="ExpenseChart">
      <Chart dataPoints={dataPoints} values={dataPointValues} />
      <h3>All expenses this year: ${sum.toFixed(2)}</h3>
    </div>
  );
};

export default ExpenseChart;

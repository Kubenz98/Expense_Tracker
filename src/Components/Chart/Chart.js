import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
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
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
        />
      ))}
    </div>
  );
};

export default Chart;

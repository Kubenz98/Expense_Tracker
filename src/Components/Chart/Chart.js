import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const totalMaximum = Math.max(...props.values);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
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

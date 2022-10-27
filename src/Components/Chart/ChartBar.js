import { useMediaQuery } from "react-responsive";
import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.value > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);
    
    return date.toLocaleString("en-US", {
      month: "short",
    });
  };

  const fullMonthMQ = useMediaQuery({ query: "(min-width: 600px)" });

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      {fullMonthMQ && <label>{toMonthName(props.label)}</label>}
      {!fullMonthMQ && <label>{props.label}</label>}
    </div>
  );
};

export default ChartBar;

import "./ChartBar.css";
const ChartBar = (props) => {
  let barFillHeight = "0%";
  
  if (props.value > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <label>{props.label}</label>
    </div>
  );
};

export default ChartBar;

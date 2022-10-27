import "./Chart.css";
// import React, { useState } from 'react';
import ChartBar from "./ChartBar";

const Chart = (props) => {
  let dataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const item of props.expenses) {
    const month = item.date.getMonth();
    dataPoints[month].value += (item.amount*1);
  }
    const dataPointValues = dataPoints.map(datapoint => datapoint.value);
    const totalMaximum = Math.max(...dataPointValues);
    
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar key={dataPoint.label} label={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} />
      ))}
    </div>
  );
};

export default Chart;

import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <div>
      {/* dynamically rendering the ChartBar:
      - for every datapoint, we render one ChartBar */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar />
      ))}
    </div>
  );
};

export default Chart;

import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

// fun unique ID generator for list rendering 'key' property
import { v4 as uuidv4 } from "uuid";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className='chart'>
      {/* dynamically rendering the ChartBar:
      - for every datapoint, we render one ChartBar */}
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          // calling the 3rd party library to make unique keys
          key={uuidv4()}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

import React from "react";
import Plotly from "react-plotly.js";

const Plot = () => (
  <Plotly
    data={[
      {
        type: "surface",
        connectgaps: true,
        x: [0.1, 0.2, 0.3, 0.4],
        y: [0, 1, 2, 3, 4],
        z: [
          [1001, 1002, 1001, null, null],
          [1002, 1001, null, 1002, null],
          [1002, null, 1001, 1001],
          [null, null, 1000, null],
        ],
      },
    ]}
    layout={{
      title: "I'm using react-plotly.js",
      width: 600,
      height: 400,
    }}
  />
);

export default Plot;

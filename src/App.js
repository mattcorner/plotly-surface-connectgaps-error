import React from "react";
import "./App.css";
import PlotCustom from "./PlotWithCustomBundle";
import Plot from "./Plot";

export default function App() {
  return (
    <React.Fragment>
      <PlotCustom />
      <Plot />
    </React.Fragment>
  );
}

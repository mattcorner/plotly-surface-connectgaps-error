import Plotly from "plotly.js/lib/core";
import Surface from "plotly.js/lib/surface";
import createPlotlyComponent from "react-plotly.js/factory";

Plotly.register([Surface]);

const CustomPlotly = createPlotlyComponent(Plotly);

export default CustomPlotly;

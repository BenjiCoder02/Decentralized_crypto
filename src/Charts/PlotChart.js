import React from 'react';
import {
    Chart as ChartJS,
    defaults
  } from 'chart.js';
  import {
    Chart
  } from 'react-chartjs-2';

function PlotChart(props) {
    <Chart type="line" data={props.historicalData} />
}

export default PlotChart;
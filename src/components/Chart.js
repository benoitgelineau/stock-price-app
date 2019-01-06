import React, { Component } from "react";
import Highcharts from 'highcharts/highstock';

class Chart extends Component {
  componentDidMount() {
    Highcharts.stockChart('chart', {
      rangeSelector: { selected: 1 },
			title: { text: 'AAPL Stock Price' },
			series: [{
        name: 'AAPL',
        data: [
          [1478266200000, 190.9898698],
          [1478529000000, 208.98797],
          [1478615400000, 180.989],
        ],
        tooltip: {
          valueDecimals: 2
        },
			}],
		});
  }

  render() {
    return <div id="chart" style={{height: '400px', width: '600px'}} />;
  }
}

export default Chart;
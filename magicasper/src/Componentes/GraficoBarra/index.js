
import React, { Component } from "react";
import Chart from "react-apexcharts";

class barGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: [1,2,3,4],
          labels: {
            style: {
              colors: '#FFFFFF',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: '#FFFFFF',
            },
          },
        },
        legend: {
          labels: {
            colors: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
          },
        },
        colors: [
          '#2E56DB','#D9D9D9','#47BCC7',
        ]
      },
      series: [
        {
          name: "programação",
          data: [3, 2, 3, 5]
        },
        {
          name: "matemática",
          data: [4, 4, 5, 1]
        },
        {
          name: "teóricas/outras",
          data: [7, 3, 2, 4]
        }
      ],
      selectedDataType: 'programação',
    };
  }

  render() {
    const { options, series, selectedDataType } = this.state;
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width={900}
              height={365}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default barGraph;
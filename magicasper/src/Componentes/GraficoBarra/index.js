
import React, { Component } from "react";
import Chart from "react-apexcharts";
import './index.css'
class barGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        zoom: {
          enabled: true,
          type: 'x',  
          autoScaleYaxis: false,  
          zoomedArea: {
            fill: {
              color: '#90CAF9',
              opacity: 0.4
            },
            stroke: {
              color: '#0D47A1',
              opacity: 0.4,
              width: 1
            }
          }
      },
        xaxis: {
          categories: ['2022.1','2022.2','2023.1','2023.2'],
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
            colors: ['#9B96CBB2', '#9B96CBB2', '#9B96CBB2'],
          },
        },
        colors: [
          '#2E56DB','#D9D9D9','#47BCC7',
        ]
      },
      series: [
        {
          name: "maior nota",
          data: [3, 2, 3, 5]
        },
        {
          name: "menor nota",
          data: [4, 4, 5, 1]
        },
        {
          name: "média de notas",
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
              width='100%'
              height={365}
              
            />
          </div>
        </div>
      </div>
    );
  }
}

export default barGraph;
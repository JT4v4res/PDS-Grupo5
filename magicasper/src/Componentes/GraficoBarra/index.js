
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
              fontSize:  '20px',
              fontWeight:  'bold',
              fontFamily:  'Segoe UI',
            },
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: '#FFFFFF',
              fontSize:  '20px',
              fontWeight:  'bold',
              fontFamily:  'Segoe UI',
            },
          },
        },
        legend: {
          labels: {
            colors: ['#9B96CBB2', '#9B96CBB2', '#9B96CBB2'],
          },
        },
        title: {
          text: 'Média de Notas',
          align: 'Center',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '20px',
            fontWeight:  'bold',
            fontFamily:  'Segoe UI',
            color:  '#D9D9D9'
          },
        },
        colors: [
          '#2E56DB','#D9D9D9','#47BCC7',
        ]
      },
      series: [
        {
          name: "maior nota",
          data: [7,4,4,8]
        },
        {
          name: "menor nota",
          data: [5, 3, 2, 7]
        },
        {
          name: "média de notas",
          data: [6, 3.5, 3, 7.5]
        }
      ],
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
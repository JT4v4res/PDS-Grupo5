import React from 'react'
import {dataGraph} from '../../pages/MateriaIndicadores/data'
import './index.css'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function BarGraph(){
  const labels = ['1', '2', '3', '4', '5', '6', '7'];
  let notas;
  let data_geral;
  dataGraph.map((item, index) => {
    return(notas[index] = item.data)
  });
  data_geral = {
      labels,
      datasets: [
          {
              label: 'Dataset vermelho',
              data: notas.data[0],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'red',
              borderWidth: 1
          },
          {
              label: 'Dataset azul',
              data: notas.data[1],
              backgroundColor: 'rgba(53, 162, 235, 0.5)',
              borderColor: 'blue',
              borderWidth: 1
          },
      ],
  };
  const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: false,
            text: 'Dataset',
        },
    },
  };

  <Bar options={options} data={data_geral} />
}

export default BarGraph;
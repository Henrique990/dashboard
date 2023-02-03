import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import custoJson from '../../custoJson.json'
// import custo

ChartJS.register(ArcElement, Tooltip, Legend);

// console.log(custoJson.map( data => data.servicos.map( data => data.))); 

console.log(custoJson)
// const chart = custoJson.map( data => data.)


const config = {
    type: 'pie',
    data: [],
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'right',
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    },
  };
const labels = ['Mão de Obra - R$ 1.543.420', 'Frota 759.760', 'Insumos 1.226.660', 'Rateio - R$ 20']

export const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [22,35,44,0],
            backgroundColor: [
                '#FF6347',
                '#4682B4',
                '#fc5c9c',
                '#FFA500',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 16,
        },

    ],
};

const DoughnutChart2 = () => {
    return (
            <Pie
                options={config}
                data={data}

            />
    )
}

export default DoughnutChart2
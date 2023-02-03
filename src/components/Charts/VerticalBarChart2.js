import React from 'react';
import custoJson from '../../custoJson.json'


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



export const options = {
  type: 'bar',
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: false,
    },
  },
  plugins: {
    title: {
      display: true,
      text: ' Chart.js Bar Chart '
    },
    legend: {
      position: 'top',
    },
    },
};
const fazenda34 = custoJson.filter( data => data.fazenda_id === 34)
const custo34 = fazenda34.map( data => data.custo)
const fazenda35 = custoJson.filter( data => data.fazenda_id === 35)
const custo35 = fazenda35.map( data => data.custo)
console.log(custo35)


const labels = custoJson.map(data => {return data.local});
export const data = {
  labels ,
  datasets: [
    {
      label: "Fazenda Alvorada",
      data: [0, custo35[0], 0, custo35[1], 0, custo35[2], 0, custo35[3], 0, custo35[4], 0, custo35[5]],
      backgroundColor: "#FF6347",
      // borderRadius: 25,
    },
    {
      label: "Fazenda da Conquista",
      data: [custo34[0], 0, custo34[1], 0, custo34[2], 0, custo34[3], 0, custo34[4], 0, custo34[5]],
      backgroundColor: "#4682B4",
      // borderRadius: 25,
    },
  ],
} 


const VerticalBarChart2 = () => {
  return (
    
    <div className="chart">
      <h2>Vertical Bar Chart</h2>
      <Bar options={options} data={data}/>
    </div>
  )
}

export default VerticalBarChart2
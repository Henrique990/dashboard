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
import { CardContent } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const servicos = custoJson.map(data => data.servicos)


const tipoInsumos = servicos.map( data => data.filter(data => data.tipo === "insumos"))
const tipoMaoObra = servicos.map(data => data.filter(data => data.tipo === "maoObra"))
const tipoFrota = servicos.map(data => data.filter(data => data.tipo === "frota"))
const tipoRateio = servicos.map(data => data.filter(data => data.tipo === "rateio"))

// console.log(tipoInsumos)
// console.log(tipoMaoObra)
// console.log(tipoFrota)
// console.log(tipoRateio)

const valorInsumos = tipoInsumos.map( data => data.reduce((acc, current ) => acc + current.valor, 0))
const valorMaoObra = tipoMaoObra.map(data => data.reduce((acc, current) => acc + current.valor, 0))
const valorFrota = tipoFrota.map(data => data.reduce((acc, current) => acc + current.valor, 0))
const valorRateio = tipoRateio.map(data => data.reduce((acc, current) => acc + current.valor, 0))

// console.log(valorInsumos)
// console.log(valorMaoObra)
// console.log(valorFrota)
// console.log(valorRateio)

// const totalInsumos = valorInsumos.reduce((sum, valorInsumos) => sum + valorInsumos, 0)
// console.log(totalInsumos)
// const totalMaoObra = valorMaoObra.reduce((sum, valorMao) => sum + valorMao, 0)

// console.log(custoJson)



export const options = {
  type: 'bar',
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
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

export const data = {
  labels: custoJson.map(data => {return data.local}),
  // labels ,
  datasets: [
    {
      label: "Frota",
      data: valorFrota,
      backgroundColor: "#4682B4",
      // borderRadius: 25,
    },
    {
      label: "Insumos",
      data: valorInsumos,

      backgroundColor: "#006400",
      // borderRadius: 25,
    },
    {
      label: "Mão de obra",
      data: valorMaoObra,
      backgroundColor: "#FF6347",
      // borderRadius: 25,
    },
    {
      label: "Rateio",
      data: valorRateio,

      backgroundColor: "#FFA500",
      // borderRadius: 25,
    },

  ],
} 


const VerticalBarChart = () => {
  return (
    <>
      <Bar options={options} data={data} />
    </>
  )
}

export default VerticalBarChart
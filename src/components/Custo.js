import React from "react";
import fluxoDeCaixa from "../fluxoCaixaJson.json";
import { Bar } from "react-chartjs-2"

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
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
  

  
  const labels = fluxoDeCaixa.map( data => {return data.competencia}) ;
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Pago',
        data: fluxoDeCaixa.map( data => {return data.pago}), 
        backgroundColor: 'pink',
      },
      {
        label: 'Recebido',
        data: fluxoDeCaixa.map( data => {return data.recebido}),
        backgroundColor: 'blue',

      },
      {
        label: 'A Pagar',
        data: fluxoDeCaixa.map( data => {return data.a_pagar}),
        backgroundColor: 'red',
      },
      {
        label: 'A Receber',
        data: fluxoDeCaixa.map( data => {return data.a_receber}),
        backgroundColor: 'orange',      
      }
    ]
  };

const Custo = () => {
    return (
        <div>
            <h1>custo</h1>
            <Bar options={options} data={data} />
        </div>
    )
}

export default Custo
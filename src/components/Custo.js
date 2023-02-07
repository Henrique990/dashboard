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
  
  const pago = fluxoDeCaixa.map( data => data.pago)
  console.log(pago);
  const recebido = fluxoDeCaixa.map( data => data.recebido)
  console.log(recebido);
  const a_pagar = fluxoDeCaixa.map( data => data.a_pagar)
  console.log(a_pagar);
  const a_receber = fluxoDeCaixa.map( data => data.a_receber)
  console.log(a_receber);
  
  const labels = fluxoDeCaixa.map( data => data.competencia) ;
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Pago',
        data: pago, 
        backgroundColor: 'pink',
      },
      {
        label: 'Recebido',
        data: recebido,
        backgroundColor: 'blue',

      },
      {
        label: 'A Pagar',
        data: a_pagar, 
        backgroundColor: 'red',
      },
      {
        label: 'A Receber',
        data: a_receber,
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
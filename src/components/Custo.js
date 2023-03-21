import React from "react";
import fluxoDeCaixa from "../fluxoCaixaJson.json";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
  
ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);  

  export const options = {
    // type: 'bar',
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
  console.log('pago = ' + pago);
  const recebido = fluxoDeCaixa.map( data => data.recebido)
  console.log('recebido = ' + recebido);
  const a_pagar = fluxoDeCaixa.map( data => data.a_pagar)
  console.log('a_pagar = ' + a_pagar);
  const a_receber = fluxoDeCaixa.map( data => data.a_receber)
  console.log('a_receber = ' + a_receber);
  const saldo_realizado = fluxoDeCaixa.map( data => data.saldo_realizado)
  console.log('saldo_realizado = ' + saldo_realizado);
  const saldo_previsto = fluxoDeCaixa.map( data => data.saldo_previsto)
  console.log('saldo_previsto = ' + saldo_previsto)

  const labels = fluxoDeCaixa.map( data => data.competencia.substring(0, 10));
  const data = {
    labels: labels,
    datasets: [
      {
        type: 'line',
        label: 'Saldo Realizado',
        data: saldo_realizado,
        backgroundColor: 'black',    
        borderColor: "black",
      },
      {
        type: 'line',
        label: 'Saldo Previsto',
        data: saldo_previsto,
        backgroundColor: 'gray',  
        borderColor: "gray",    
      },
      {
        type: 'bar',
        label: 'Pago',
        data: pago, 
        backgroundColor: '#DC143C',
      },
      {
        type: 'bar',
        label: 'Recebido',
        data: recebido,
        backgroundColor: 'blue',

      },
      {
        type: 'bar',
        label: 'A Pagar',
        data: a_pagar, 
        backgroundColor: '#FA8072',
      },
      {
        type: 'bar',
        label: 'A Receber',
        data: a_receber,
        backgroundColor: '#00FFFF',      
      },
    ]
  };

const Custo = () => {
    return (
        <Chart options={options} data={data} />
    )
}

export default Custo
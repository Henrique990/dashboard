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
const labels = ['Mão de Obra', 'Frota', 'Insumos', 'Rateio']

const servicos = custoJson.map(data => data.servicos)


const tipoInsumos = servicos.map( data => data.filter(data => data.tipo === "insumos"))
const tipoMaoObra = servicos.map(data => data.filter(data => data.tipo === "maoObra"))
const tipoFrota = servicos.map(data => data.filter(data => data.tipo === "frota"))
const tipoRateio = servicos.map(data => data.filter(data => data.tipo === "rateio"))

console.log(tipoInsumos)
console.log(tipoMaoObra)
console.log(tipoFrota)
console.log(tipoRateio)

const valorInsumos = tipoInsumos.map( data => data.reduce((acc, current ) => acc + current.valor, 0))
const valorMaoObra = tipoMaoObra.map(data => data.reduce((acc, current) => acc + current.valor, 0))
const valorFrota = tipoFrota.map(data => data.reduce((acc, current) => acc + current.valor, 0))
const valorRateio = tipoRateio.map(data => data.reduce((acc, current) => acc + current.valor, 0))

console.log(valorInsumos)
console.log(valorMaoObra)
console.log(valorFrota)
console.log(valorRateio)

const totalInsumos = valorInsumos.reduce((sum, valorInsumos) => sum + valorInsumos, 0)
const totalMaoObra = valorMaoObra.reduce((sum, valorMao) => sum + valorMao, 0)
const totalFrota = valorFrota.reduce((sum, valorFrota) => sum + valorFrota, 0)
const totalRateio = valorRateio.reduce((sum, valorRateio) => sum + valorRateio, 0)
console.log(totalInsumos)
console.log(totalMaoObra)
console.log(totalFrota)
console.log(totalRateio)

const total = totalInsumos + totalMaoObra + totalFrota + totalRateio
console.log(total)

// console.log(custoJson)
const data = {
    labels,
    datasets: [
        {
            label: '',
            data: [totalMaoObra, totalFrota, totalInsumos, totalRateio],
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

export const DoughnutChart2 = ({elems}) => {
    return (
            <Pie
                options={config}
                data={data}

            />
    )
}

export default DoughnutChart2
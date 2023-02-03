import React from 'react';
import MyData from '../../custoJson.json'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


// console.log(JSON.parse(MyData))

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },

    },
};
// const cafe = MyData.map(data => {return String(data.local)})
// const servicos = MyData.map(data => data.servicos.map(servicos => servicos.tipo))
const labels = MyData.map(data => {return String(data.local)})

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Customers',
            data: MyData.map(data => {return Number(data.custo)}) ,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};


const AreaChart = () => {
    // const dataTest = JSON.parse(MyData)
    // console.log(MyData);
    return (
        <div className='chart'>
            <h2>Area Chart</h2>
            <Line options={options} data={data} />

        </div>
    )
}

export default AreaChart
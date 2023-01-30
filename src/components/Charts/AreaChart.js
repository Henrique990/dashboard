import React from 'react';

import MyData from "../../fluxoCaixaJson.json"


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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Customers',
            data: MyData.map(data => {return Number(data.pago)}),
            // data: [1,2,3],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const data1 = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Customers',
            data: MyData.map(data => {return Number(data.pago)}),
            // data: [1,2,3],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
        {
            fill: true,
            label: 'Customers2',
            data1: MyData.map(data => {return Number(data.recebido)}),
            // data: [1,2,3],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },

    ],
};


const AreaChart = () => {
    // const dataTest = JSON.parse(MyData)
    console.log(MyData);
    return (
        <div className='chart'>
            <h2>Area Chart</h2>
            <Line options={options} data={data} />
            <Line options={options} data={data1} />

        </div>
    )
}

export default AreaChart
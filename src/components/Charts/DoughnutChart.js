import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import custoJson from '../../custoJson.json'

ChartJS.register(ArcElement, Tooltip, Legend);

const fazenda34 = custoJson.filter( data => data.fazenda_id === 34)
console.log(fazenda34)
const custo34 = fazenda34.map( data => data.custo)
console.log(custo34)
const totalCusto34 = custo34.reduce((acc, val) => acc + val, 0);
console.log(totalCusto34)

const fazenda35 = custoJson.filter( data => data.fazenda_id === 35)
const custo35 = fazenda35.map( data => data.custo)
const totalCusto35 = custo35.reduce((acc, val) => acc + val, 0);
console.log(totalCusto35)

const config = {
    type: 'pie',
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Pie Chart'
        }
      }
    },
  };

// const labels = ['Fazenda Alvorada', 'Fazenda da Conquista']

export const data = {
    labels:['Fazenda Alvorada', 'Fazenda da Conquista'],
    datasets: [
        {
            label: '',
            data: [totalCusto34, totalCusto35 ],
            backgroundColor: [
                'blue',
                'green',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
            hoverOffset: 16,
        },

    ],
};

export const DoughnutChart = () => {
  const [filteredData, setFilteredData] = React.useState(data);

  const handleElementsClick = (elems) => {
    console.log('handleElementsClick foi chamado!', elems);
    const fazendaId = elems[0]._index;
    const fazendaData = fazendaId === 0 ? fazenda34 : fazenda35;
    setFilteredData({
      labels: [elems[0]._model.label],
      datasets: [
        {
          label: "",
          data: [fazendaData.map(d => d.custo).reduce((a, b) => a + b, 0)],
          backgroundColor: [elems[0]._model.backgroundColor],
          borderColor: ["rgba(255, 99, 132, 1)"],
          borderWidth: 1,
          hoverOffset: 16,
        },
      ],
    });
  };


  return (
    <Pie
      options={{
        ...config,
        plugins: {
          ...config.plugins,
          onClick: handleElementsClick,
        },
      }}
      data={filteredData}

    />
  );
};

export default DoughnutChart
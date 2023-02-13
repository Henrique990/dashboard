import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import custoJson from '../../custoJson.json'
import { Box, CardContent } from '@mui/material';

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
      events: ['click'],
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
  const config2 = {
    type: 'pie',
    options: {
      responsive: true,
      events: ['click'],
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
            data: [totalCusto34, totalCusto35 ],
            backgroundColor: [
                'blue',
                'green',
            ],
            borderColor: [
                'black',
            ],
            borderWidth: 1,
            hoverOffset: 16,
        },

    ],
};
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
const totalInsumos = valorInsumos.reduce((sum, valorInsumos) => sum + valorInsumos, 0)
const totalMaoObra = valorMaoObra.reduce((sum, valorMao) => sum + valorMao, 0)
const totalFrota = valorFrota.reduce((sum, valorFrota) => sum + valorFrota, 0)
const totalRateio = valorRateio.reduce((sum, valorRateio) => sum + valorRateio, 0)
  // console.log(totalInsumos)
  // console.log(totalMaoObra)
  // console.log(totalFrota)
  // console.log(totalRateio)
export const data2 = {
  labels:['Mão de Obra', 'Frota', 'Insumos', 'Rateio'],
  datasets: [
      {
        data: [totalMaoObra, totalFrota, totalInsumos, totalRateio],
        backgroundColor: [
            '#FF6347',
            '#4682B4',
            '#fc5c9c',
            '#FFA500',
          ],
          borderColor: [
              'black',
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
    <CardContent sx={{display: 'flex', justifyContent: 'space-around'}}>
    <Box sx={{maxHeight: '20rem'}}>
    <Pie
      options={{
        ...config,
          onClick: handleElementsClick,
        
      }}
      data={filteredData}

    />
    </Box>
    <Box sx={{maxHeight: '20rem'}}>
    <Pie
      options={config2}
      data={data2}  
    />
    </Box>
    </CardContent>
  );
};

export default DoughnutChart


import React, { useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Pie, getElementsAtEvent } from "react-chartjs-2";
import custoJson from "../../custoJson.json";
import { Box, CardContent } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend);

const fazenda34 = custoJson.filter((data) => data.fazenda_id === 34);
console.log(fazenda34);
const custo34 = fazenda34.map((data) => data.custo);
console.log(custo34);
const totalCusto34 = custo34.reduce((acc, val) => acc + val, 0);
console.log(totalCusto34);

const fazenda35 = custoJson.filter((data) => data.fazenda_id === 35);
const custo35 = fazenda35.map((data) => data.custo);
const totalCusto35 = custo35.reduce((acc, val) => acc + val, 0);
console.log(totalCusto35);

const text = 'Fazendas'

const config = {
  type: "pie",
  responsive: true,
  events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Fazendas",
    },
  },
};
const config2 = {
  type: "pie",
    responsive: true,
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    plugins: {
      legend: {
        responsive: true,
        position: "top",
      },
      title: {
        display: true,
        text: text,
      },
    },
  }


// const labels = ['Fazenda Alvorada', 'Fazenda da Conquista']

export const data = {
  labels: [`Fazenda Alvorada R$ ${totalCusto34.toLocaleString()}`, `Fazenda da Conquista R$ ${totalCusto35.toLocaleString()}`],
  datasets: [
    {
      label: "Fazendas",
      data: [totalCusto34, totalCusto35],
      backgroundColor: ["blue", "green"],
      borderColor: ["black"],
      borderWidth: 1,
      hoverOffset: 16,
    },
  ],
};
const servicos = custoJson.map((data) => data.servicos);
export const servicos34 = fazenda34.map((data) => data.servicos);
export const servicos35 = fazenda35.map((data) => data.servicos);
console.log(servicos34);

const tipoInsumos = servicos.map((data) =>
  data.filter((data) => data.tipo === "insumos")
);
const tipoInsumos34 = servicos34.map((data) =>
  data.filter((data) => data.tipo === "insumos")
);
const tipoInsumos35 = servicos35.map((data) =>
  data.filter((data) => data.tipo === "insumos")
);

const tipoMaoObra = servicos.map((data) =>
  data.filter((data) => data.tipo === "maoObra")
);
const tipoMaoObra34 = servicos34.map((data) =>
  data.filter((data) => data.tipo === "maoObra")
);
const tipoMaoObra35 = servicos35.map((data) =>
  data.filter((data) => data.tipo === "maoObra")
);

const tipoFrota = servicos.map((data) =>
  data.filter((data) => data.tipo === "frota")
);
const tipoFrota34 = servicos34.map((data) =>
  data.filter((data) => data.tipo === "frota")
);
const tipoFrota35 = servicos35.map((data) =>
  data.filter((data) => data.tipo === "frota")
);

const tipoRateio = servicos.map((data) =>
  data.filter((data) => data.tipo === "rateio")
);
const tipoRateio34 = servicos34.map((data) =>
  data.filter((data) => data.tipo === "rateio")
);
const tipoRateio35 = servicos35.map((data) =>
  data.filter((data) => data.tipo === "rateio")
);

// console.log(tipoInsumos)
// console.log(tipoMaoObra)
// console.log(tipoFrota)
// console.log(tipoRateio)
const valorInsumos = tipoInsumos.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorInsumos34 = tipoInsumos34.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorInsumos35 = tipoInsumos35.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
//----------------------------------------------------------------
const valorMaoObra = tipoMaoObra.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorMaoObra34 = tipoMaoObra34.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorMaoObra35 = tipoMaoObra35.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
//-----------------------------------------------------------------
const valorFrota = tipoFrota.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorFrota34 = tipoFrota34.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorFrota35 = tipoFrota35.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
//----------------------------------------------------------------
const valorRateio = tipoRateio.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorRateio34 = tipoRateio34.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorRateio35 = tipoRateio35.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
//----------------------------------------------------------------
// console.log(valorInsumos)
// console.log(valorMaoObra)
// console.log(valorFrota)
// console.log(valorRateio)
const totalInsumos = valorInsumos.reduce(
  (sum, valorInsumos) => sum + valorInsumos,
  0
);
const totalInsumos34 = valorInsumos34.reduce(
  (sum, valorInsumos) => sum + valorInsumos,
  0
);
const totalInsumos35 = valorInsumos35.reduce(
  (sum, valorInsumos) => sum + valorInsumos,
  0
);
//----------------------------------------------------------------
const totalMaoObra = valorMaoObra.reduce((sum, valorMao) => sum + valorMao, 0);
const totalMaoObra34 = valorMaoObra34.reduce(
  (sum, valorMao) => sum + valorMao,
  0
);
const totalMaoObra35 = valorMaoObra35.reduce(
  (sum, valorMao) => sum + valorMao,
  0
);
//----------------------------------------------------------------
const totalFrota = valorFrota.reduce((sum, valorFrota) => sum + valorFrota, 0);
const totalFrota34 = valorFrota34.reduce(
  (sum, valorFrota) => sum + valorFrota,
  0
);
const totalFrota35 = valorFrota35.reduce(
  (sum, valorFrota) => sum + valorFrota,
  0
);
//----------------------------------------------------------------
const totalRateio = valorRateio.reduce(
  (sum, valorRateio) => sum + valorRateio,
  0
);
const totalRateio34 = valorRateio34.reduce(
  (sum, valorRateio) => sum + valorRateio,
  0
);
const totalRateio35 = valorRateio35.reduce(
  (sum, valorRateio) => sum + valorRateio,
  0
);

// console.log(totalInsumos)
// console.log(totalMaoObra)
// console.log(totalFrota)
// console.log(totalRateio)


export const data2 = {
  labels: [
    `Mão de Obra R$ ${totalMaoObra.toLocaleString()}`,
    `Frota R$ ${totalFrota.toLocaleString()}`,
    `Insumos R$ ${totalInsumos.toLocaleString()}`,
    `Rateio R$ ${totalRateio.toLocaleString()},000`,
  ],
  datasets: [
    {
      data: [totalMaoObra, totalFrota, totalInsumos, totalRateio],
      backgroundColor: ["#FF6347", "#4682B4", "#fc5c9c", "#FFA500"],
      borderColor: ["black"],
      borderWidth: 1,
      hoverOffset: 16,
    },
  ],
};

export const DoughnutChart = () => {
  let [dataValueForChart2, setDataValueForChart2] = useState(data2,text);

  const chartRef = useRef();
  const onClick = (event) => {
    if (getElementsAtEvent(chartRef.current, event).length > 0) {
      console.log(getElementsAtEvent(chartRef.current, event));
      const datasetIndexNum = getElementsAtEvent(chartRef.current, event)[0]
        .datasetIndex;
      const dataPoint = getElementsAtEvent(chartRef.current, event)[0].index;

      console.log(`Dataset: ${datasetIndexNum} and Data: ${dataPoint}`);
      const selectedLabel = data.labels[dataPoint];
      console.log(selectedLabel);

      let newData2;
      if (dataPoint === 0) {
        newData2 = {
          labels: [    
          `Mão de Obra R$ ${totalMaoObra35.toLocaleString()}`,
          `Frota R$ ${totalFrota35.toLocaleString()}`,
          `Insumos R$ ${totalInsumos35.toLocaleString()}`,
          `Rateio R$ ${totalRateio35.toLocaleString()}`,
      ],
          datasets: [
            {
              data: [totalMaoObra35, totalFrota35, totalInsumos35, totalRateio35],
              backgroundColor: ["#FF6347", "#4682B4", "#fc5c9c", "#FFA500"],
              borderColor: ["black"],
              borderWidth: 1,
              hoverOffset: 16,
            },
          ],
        };
      } else if(dataPoint === 1) {
        newData2 = {
          labels: [    
          `Mão de Obra R$ ${totalMaoObra34.toLocaleString()}`,
          `Frota R$ ${totalFrota34.toLocaleString()}`,
          `Insumos R$ ${totalInsumos34.toLocaleString()}`,
          `Rateio R$ ${totalRateio34.toLocaleString()}`,
      ],
          datasets: [
            {
              data: [totalMaoObra34, totalFrota34, totalInsumos34, totalRateio34],
              backgroundColor: ["#FF6347", "#4682B4", "#fc5c9c", "#FFA500"],
              borderColor: ["black"],
              borderWidth: 1,
              hoverOffset: 16,
            },
          ],
        };
      }
      setDataValueForChart2(newData2);
      console.log(setDataValueForChart2)
    }
  };

  return (
    <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ width: "20rem", '@media screen and (max-width: 500px)': {width:'12rem'} }}>
        <Pie options={config} data={data} onClick={onClick} ref={chartRef} />
      </Box>
      <Box sx={{ width: "20rem", '@media screen and (max-width: 500px)': {width:'12rem'} }}>
        <Pie options={config2} data={dataValueForChart2} />
      </Box>
    </CardContent>
  );
};

export default DoughnutChart;

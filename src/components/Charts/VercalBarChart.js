import React, { useState } from "react";
import custoJson from "../../custoJson.json";
import { servicos34, servicos35 } from "./DoughnutChart";

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
import { Button, Box } from "@mui/material";

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

const custoJson34 = custoJson.filter((data) => data.fazenda_id === 34);
const custoJson35 = custoJson.filter((data) => data.fazenda_id === 35);

console.log(custoJson34, custoJson35);

const servicos = custoJson.map((data) => data.servicos);

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

const valorMaoObra = tipoMaoObra.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorMaoObra34 = tipoMaoObra34.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorMaoObra35 = tipoMaoObra35.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);

const valorFrota = tipoFrota.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorFrota34 = tipoFrota34.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorFrota35 = tipoFrota35.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);

const valorRateio = tipoRateio.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorRateio34 = tipoRateio34.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);
const valorRateio35 = tipoRateio35.map((data) =>
  data.reduce((acc, current) => acc + current.valor, 0)
);

const somaTotal = valorRateio + valorFrota + valorInsumos + valorMaoObra
console.log(somaTotal);


const somaRateio = valorRateio.reduce((acc, valor) => acc + valor, 0); // Soma todos os valores do array
const mediaRateio = somaRateio / valorRateio.length; // Divide a soma pelo número de elementos no array

console.log(mediaRateio); 

const somaInsumos = valorInsumos.reduce((acc, valor) => acc + valor, 0); // Soma todos os valores do array
const mediaInsumos = somaInsumos / valorInsumos.length; // Divide a soma pelo número de elementos no array

console.log(mediaInsumos); 

const somaMaoObra = valorMaoObra.reduce((acc, valor) => acc + valor, 0); // Soma todos os valores do array
const mediaMaoObra = somaMaoObra / valorMaoObra.length; // Divide a soma pelo número de elementos no array

console.log(mediaMaoObra); 

const somaFrota= valorFrota.reduce((acc, valor) => acc + valor, 0); // Soma todos os valores do array
const mediaFrota = somaFrota / valorFrota.length; // Divide a soma pelo número de elementos no array

console.log(mediaFrota); 

// console.log(valorInsumos)
// console.log(valorMaoObra)
// console.log(valorFrota)
// console.log(valorRateio)

// const totalInsumos = valorInsumos.reduce((sum, valorInsumos) => sum + valorInsumos, 0)
// console.log(totalInsumos)
// const totalMaoObra = valorMaoObra.reduce((sum, valorMao) => sum + valorMao, 0)

// console.log(custoJson)

export const options = {
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
      text: "Fazendas",
    },
    legend: {
      position: "top",
    },
  },
};

export const data = {
  labels: custoJson.map((data) => {
    return data.local;
  }),
  // labels ,
  datasets: [
    {
      type: "line",
      label: "Custo de Produção",
      data: [100000, 100000, 100000, 100000, 100000, 100000],
      backgroundColor: "purple",
      borderWidth: 4,
      fill: false,
      borderColor: "purple",
    },
    {
      type: "bar",

      label: "Media",
      data: valorRateio,

      backgroundColor: "black",
      // borderRadius: 25,
    },
    {
      type: "bar",
      label: "Frota",
      data: valorFrota,
      backgroundColor: "#4682B4",
      // borderRadius: 25,
    },
    {
      type: "bar",

      label: "Insumos",
      data: valorInsumos,

      backgroundColor: "#006400",
      // borderRadius: 25,
    },
    {
      type: "bar",

      label: "Mão de obra",
      data: valorMaoObra,
      backgroundColor: "#FF6347",
      // borderRadius: 25,
    },
    {
      type: "bar",

      label: "Rateio",
      data: valorRateio,

      backgroundColor: "#FFA500",
      // borderRadius: 25,
    },
  ],
};

const VerticalBarChart = () => {
  const [dataVerticalBarChart, setDataValueForChart2] = useState(data);

  const fazendaDaConquista = () => {
    options.plugins.title.text = "Fazenda da Conquista";

    const newData = {
      labels: custoJson34.map((data) => {
        return data.local;
      }),
      // labels ,
      datasets: [
        {
          label: "Frota",
          data: valorFrota34,
          backgroundColor: "#4682B4",
          // borderRadius: 25,
        },
        {
          label: "Insumos",
          data: valorInsumos34,

          backgroundColor: "#006400",
          // borderRadius: 25,
        },
        {
          label: "Mão de obra",
          data: valorMaoObra34,
          backgroundColor: "#FF6347",
          // borderRadius: 25,
        },
        {
          label: "Rateio",
          data: valorRateio34,

          backgroundColor: "#FFA500",
          // borderRadius: 25,
        },
      ],
    };
    setDataValueForChart2(newData);
  };
  const fazendaAlvorada = () => {
    options.plugins.title.text = "Fazenda Alvorada";

    const newData = {
      labels: custoJson35.map((data) => {
        return data.local;
      }),
      // labels ,
      datasets: [
        {
          label: "Frota",
          data: valorFrota35,
          backgroundColor: "#4682B4",
          // borderRadius: 25,
        },
        {
          label: "Insumos",
          data: valorInsumos35,

          backgroundColor: "#006400",
          // borderRadius: 25,
        },
        {
          label: "Mão de obra",
          data: valorMaoObra35,
          backgroundColor: "#FF6347",
          // borderRadius: 25,
        },
        {
          label: "Rateio",
          data: valorRateio35,

          backgroundColor: "#FFA500",
          // borderRadius: 25,
        },
      ],
    };
    setDataValueForChart2(newData);
  };

  return (
    <>
      <Chart options={options} data={dataVerticalBarChart} />
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          onClick={fazendaDaConquista}
          sx={{ backgroundColor: "green", color: "black" }}
        >
          Fazenda da Conquista
        </Button>
        <Button
          onClick={fazendaAlvorada}
          sx={{ backgroundColor: "green", color: "black" }}
        >
          Fazenda Alvorada
        </Button>
      </Box>
    </>
  );
};

export default VerticalBarChart;

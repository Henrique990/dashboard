import React, { useState } from "react";
import "./HomeApp.css";
import {
  Box,
  Typography,
  CardContent,
  Select,
  Slider,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import VerticalBarChart from "./Charts/VercalBarChart";
import VerticalBarChart2 from "./Charts/VerticalBarChart2";

import DoughnutChart from "./Charts/DoughnutChart";
// import DoughnutChart2 from "./Charts/DoughnutChart2";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

import json from "../fluxoCaixaJson.json";
import custoJson from "../custoJson.json";
import Custo from "./Custo";

export function SliderSizes() {
  return (
    <Box
      sx={{
        width: "14em",
        "@media screen and (max-width: 1370px)": {
          width: "6em",
        },
      }}
    >
      {/* <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> */}
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
    </Box>
  );
}
export function BasicDatePicker() {
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const [filteredJson, setFilteredJson] = React.useState(null);

  React.useEffect(() => {
    // Filtra o JSON com base nas datas selecionadas
    if (startDate && endDate) {
      setFilteredJson(
        json.filter(
          (item) => item.competencia >= startDate && item.competencia <= endDate
        )
      );
    }
  }, [startDate, endDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: "14em",
          "@media screen and (max-width: 1170px)": {
            width: "6em",
          },
        }}
      >
        <DatePicker
          label="Data Início"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box
        sx={{
          width: "14em",
          "@media screen and (max-width: 1170px)": {
            width: "6em",
          },
        }}
      >
        <DatePicker
          label="Data Fim"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
    </LocalizationProvider>
  );
}

const HomeApp = () => {
  // const [ selectedLocal, setSelecedLocal] = React.useState()
  const [selectedLocal, setSelectedLocal] = useState("Cafe");

  const [filteredData, seetFilteredData] = useState(custoJson);

  const handleFilter = (event) => {
    setSelectedLocal(event.target.value);
    seetFilteredData(
      custoJson.filter((data) => data.local === event.target.value)
    );
  };

  const totalG = custoJson
    .map((data) => data.custo)
    .reduce((total, data) => total + data, 0);
  console.log('totalG = ' + totalG)
  // const totalG_format = totalG.toLocaleString()
  // console.log(totalG_format)
  const numberHectares = custoJson.map((data) => Number(data.hectares));
  console.log('numberHectares = ' + numberHectares)
  const totalH = numberHectares
    .map((data) => Number(data))
    .reduce((total, data) => total + data, 0);
  console.log('totalH = ' + totalH)
  const mediaPorHectare = totalG / totalH;
  console.log('mediaPorHectares = ' + mediaPorHectare.toLocaleString())
  // console.log(total.toLocaleString())

  const producao = custoJson.map( data => data.producao_efetiva || data.producao_prevista).map(Number)
  console.log('produção = ' + producao)
  const totalProducao = producao.reduce((total, data) => total + data, 0);
  console.log('totalProdução = ' + totalProducao)
  const mediaProducao = totalProducao / producao.length;
  console.log('mediaProdução = ' + mediaProducao)
  const hectares = custoJson.map(data => data.hectares).map(Number)
  console.log('hectares = ' + hectares)
  const hectaresTotal = hectares.reduce((total, data) => total + data, 0);
  console.log('hectaresTotal = ' + hectaresTotal)
  const producaoTotal = mediaProducao * hectaresTotal
  console.log('Produção Total = ' + producaoTotal.toLocaleString())
  const mediaCustoProducao = mediaPorHectare / mediaProducao
  console.log('mediaCustoProducao = ' + mediaCustoProducao.toLocaleString())
  
    
  const [totalGeral, setTotalGeral] = useState(totalG.toLocaleString());
  // const [selectedItem, setSelectedItem] = useState("");
  const [totalHectares, setTotalHectares] = useState(totalH);
  const [custoHA, setCustoHA] = useState(mediaPorHectare.toLocaleString());

  const handleItemSelect = (item) => {
    if (item === "") {
      setSelectedLocal("Café");
    } else {
      setSelectedLocal(item);
      setTotalGeral(custoJson.find((i) => i.local === item).custo);
      setTotalHectares(custoJson.find((i) => i.local === item).hectares);
      setCustoHA(
        custoJson.find((i) => i.local === item).custo /
          custoJson.find((i) => i.local === item).hectares
      );
      console.log("hello world");
    }
  };

  // const totalGeral = custoJson.map(data => data.custo).reduce((acc, val) => acc + val, 0)
  // const totalHectares = numberHectares.reduce((acc, val) => acc + val, 0)

  return (
    <div>
      <CardContent sx={{ marginLeft: "2rem" }}>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControl>
            <InputLabel>Safra</InputLabel>
            <Select
              sx={{
                width: "12em",
                "@media screen and (max-width: 1170px)": {
                  width: "6em",
                },
              }}
              value={selectedLocal}
              label="Cafe"
              onChange={(e) => handleItemSelect(e.target.value)}
            >
              {custoJson.map((data) => (
                <MenuItem key={data.local} value={data.local}>
                  {data.local}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <BasicDatePicker />
          <SliderSizes />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em" },
              }}
            >
              Total Geral
            </Typography>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em" },
              }}
            >
              R$ {totalGeral.toLocaleString()}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em" },
              }}
            >
              Total Hectares
            </Typography>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em" },
              }}
            >
              {totalHectares}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em" },
              }}
            >
              Custo HA
            </Typography>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em" },
              }}
            >
              {custoHA.toLocaleString()}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em", justifyContent: "space-between" },
              }}
            >
              Produção por HA
            </Typography>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em", justifyContent: "space-between" },
              }}
            >
              {mediaProducao}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em", justifyContent: "space-between" },
              }}
            >
              Produção Total
            </Typography>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em", justifyContent: "space-between" },
              }}
            >
              {producaoTotal.toLocaleString()}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em", justifyContent: "space-between" },
              }}
            >
              Custo Produção
            </Typography>
            <Typography
              sx={{
                "@media screen and (max-width: 900px)": { fontSize: "0.7em", justifyContent: "space-between" },
              }}
            >
              {mediaCustoProducao.toLocaleString()}
            </Typography>
          </Box>
        </CardContent>
        {/* <Box sx={{ maxHeight: "15rem" }}>
            <DoughnutChart2 />
          </Box> */}
      </CardContent>
      <DoughnutChart />
      <VerticalBarChart />

      <VerticalBarChart2 />
      <Custo />
    </div>
  );
};

export default HomeApp;

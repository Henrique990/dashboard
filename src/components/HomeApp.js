import React, { useState } from "react";
import "./HomeApp.css";
import {
  Box,
  Typography,
  CardContent,
  Select,
  Slider,
  MenuItem,
} from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import VerticalBarChart from "./Charts/VercalBarChart";
import VerticalBarChart2 from "./Charts/VerticalBarChart2";

import DoughnutChart from "./Charts/DoughnutChart";
import DoughnutChart2 from "./Charts/DoughnutChart2";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

import json from "../fluxoCaixaJson.json";
import custoJson from "../custoJson.json";
import Custo from "./Custo";

export function SliderSizes() {
  return (
    <Box width={300}>
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
      <DatePicker
        label="Data Início"
        value={startDate}
        onChange={(newValue) => {
          setStartDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        label="Data Fim"
        value={endDate}
        onChange={(newValue) => {
          setEndDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
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
  // console.log(totalG)
  // const totalG_format = totalG.toLocaleString()
  // console.log(totalG_format)
  const numberHectares = custoJson.map((data) => Number(data.hectares));
  // console.log(numberHectares)
  const totalH = numberHectares
    .map((data) => Number(data))
    .reduce((total, data) => total + data, 0);
  // console.log(totalH)
  const mediaPorHectare = totalG / totalH;
  // console.log(mediaPorHectare.toLocaleString())

  // console.log(total.toLocaleString())

  const [totalGeral, setTotalGeral] = useState(totalG.toLocaleString());
  const [selectedItem, setSelectedItem] = useState("");
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
          <Select
            sx={{ width: "15rem" }}
            value={selectedLocal}
            onChange={(e) => handleItemSelect(e.target.value)}
          >
            {custoJson.map((data) => (
              <MenuItem key={data.local} value={data.local}>
                {data.local}
              </MenuItem>
            ))}
          </Select>
          <BasicDatePicker />
          <SliderSizes />
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box>
            <Typography>Total Geral</Typography>
            <Typography>R$ {totalGeral.toLocaleString()}</Typography>
          </Box>
          <Box>
            <Typography>Total Hectares</Typography>
            <Typography>{totalHectares}</Typography>
          </Box>
          <Box>
            <Typography>Custo HA</Typography>
            <Typography>{custoHA.toLocaleString()}</Typography>
          </Box>
          <Box>
            <Typography>Produção por HA</Typography>
            <Typography>23,90</Typography>
          </Box>
          <Box>
            <Typography>Produção Total</Typography>
            <Typography>4.054,70</Typography>
          </Box>
          <Box>
            <Typography>Custo Produção</Typography>
            <Typography>380,40</Typography>
          </Box>
        </CardContent>
        <CardContent sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box sx={{ maxHeight: "15rem" }}>
            <DoughnutChart />
          </Box>
          <Box sx={{ maxHeight: "15rem" }}>
            <DoughnutChart2 />
          </Box>
        </CardContent>
        <Box >
        </Box>
        <VerticalBarChart />
        
        <VerticalBarChart2 />
        <Custo />
      </CardContent>
    </div>
  );
};

export default HomeApp;

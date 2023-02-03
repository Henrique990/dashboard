import React, { useState } from "react";
import "./HomeApp.css";
import { Box, Typography, CardContent, Select, Slider } from "@mui/material";
import "react-circular-progressbar/dist/styles.css";
import VerticalBarChart from "./Charts/VercalBarChart";
import VerticalBarChart2 from "./Charts/VerticalBarChart2";

import DoughnutChart from "./Charts/DoughnutChart";
import DoughnutChart2 from "./Charts/DoughnutChart2";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';

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
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Data Inicio"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
            <DatePicker
        label="Data Fim"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />

    </LocalizationProvider>
  );
}


const HomeApp = () => {
  return (
    <div>
      <CardContent sx={{marginLeft: '2rem'}}>
      <CardContent sx={{display: 'flex', justifyContent: 'space-around'}}>
      <Select
        sx={{width: '15rem'}}
      />
      <BasicDatePicker />
      <SliderSizes />
      </CardContent>
      <CardContent sx={{display: 'flex', justifyContent: 'space-around'}}>
        <Box>
          <Typography>Total Geral</Typography>
          <Typography>R$ 1.542.420,16</Typography>
        </Box>
        <Box>
          <Typography>Total Hectares</Typography>
          <Typography>169,65</Typography>
        </Box>
        <Box>
          <Typography>Custo HA</Typography>
          <Typography>9.091,78</Typography>
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
      <CardContent sx={{display: 'flex', justifyContent: 'space-around'}}>
      <Box sx={{maxWidth: '15rem'}}>
          <DoughnutChart />
        </Box>
        <Box sx={{maxWidth: '15rem'}}>
          <DoughnutChart2 />
        </Box>
      </CardContent>
      <VerticalBarChart />
      <VerticalBarChart2 />
 
      </CardContent>
      </div>
  );
};

export default HomeApp;

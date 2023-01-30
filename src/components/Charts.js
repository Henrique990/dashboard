import React from 'react'
import AreaChart from '../components/Charts/AreaChart'
import HorizontalBarChart from '../components/Charts/HorizontalBarChart'
import LineChart from '../components/Charts/LineChart'
import VerticalBarChart from '../components/Charts/VercalBarChart'
import "../components/Charts.css";

const Charts = () => {
  return (
    <div className="charts">
      <div>
        <HorizontalBarChart/>
      </div>
      <div>
        <VerticalBarChart/>
      </div>
      <div>
        <LineChart/>
      </div>
      <div>
        <AreaChart/>
      </div>
    </div>
  )
}

export default Charts

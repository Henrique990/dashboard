import React from 'react'
import AreaChart from '../components/Charts/AreaChart'
import HorizontalBarChart from '../components/Charts/HorizontalBarChart'
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
        <AreaChart/>
      </div>
    </div>
  )
}

export default Charts

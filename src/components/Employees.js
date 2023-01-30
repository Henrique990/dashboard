import React from "react";

import Custo from "../custoJson.json"

import VerticalBarChart from "../components/Charts/VercalBarChart"
console.log(Custo)





const Employees = () => {
    return (
        <div>
            {/* <div>Orders</div> */}
            <VerticalBarChart />
        </div>
    )
}

export default Employees
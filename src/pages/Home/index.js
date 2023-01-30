import './Home.css'
import { Routes, Route } from "react-router-dom"
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Employees from "../../components/Employees";
import Customers from "../../components/Customers";
import Orders from "../../components/Orders";
import Kanban from "../../components/Kanban";
import Charts from "../../components/Charts";
import HomeApp from "../../components/HomeApp";

function Home() {
  return (
    <div className="main">

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="nav">
        <div className="navbar">
          <Navbar />
        </div>

        <div>

          <Routes>

            <Route path='/' exact element={(<HomeApp />)} />
            <Route path='/home/employees' element={(<Employees />)} />
            <Route path='/home/customers'  element={(<Customers />)} />
            <Route path='/home/kanban'  element={(<Kanban />)} />
            <Route path='/home/orders'  element={(<Orders />)} />
            <Route path='/home/charts'  element={(<Charts />)} />

          </Routes>

        </div>
      </div>

    </div>
  );
}

export default Home
import './Home.css'
import { Routes, Route } from "react-router-dom"
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import Employees from "../../components/Employees";
import Customers from "../../components/Customers";
import Orders from "../../components/Orders";
import Kanban from "../../components/Kanban";
import Charts from "../../components/Charts";
import Home from "../../components/Home";

function HomeApp() {
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

            <Route path='/' exact element={(<Home />)} />
            <Route path='/employees' element={(<Employees />)} />
            <Route path='/customers'  element={(<Customers />)} />
            <Route path='/kanban'  element={(<Kanban />)} />
            <Route path='/orders'  element={(<Orders />)} />
            <Route path='/charts'  element={(<Charts />)} />

          </Routes>

        </div>
      </div>

    </div>
  );
}

export default HomeApp
import './Home.css'
import { Routes, Route } from "react-router-dom"
import Sidebar from "../../components/Sidebar";
// import Custo from '../../components/Custo';
// import Charts from "../../components/Charts";
import HomeApp from "../../components/HomeApp";

function Home() {
  return (
    <div className="main">

      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="nav">
        <div className="navbar">
          {/* <Navbar /> */}
        </div>

        <div>

          <Routes>

            <Route path='/home' exact element={(<HomeApp />)} />
            {/* <Route path='/home/custo' element={(<Custo />)} /> */}
            {/* <Route path='/home/charts'  element={(<Charts />)} /> */}

          </Routes>

        </div>
      </div>

    </div>
  );
}

export default Home
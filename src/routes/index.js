import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

// import Employees from "../components/Employees";
// import Customers from "../components/Customers";
// import Orders from "../components/Orders";
// import Kanban from "../components/Kanban";
// import Charts from "../components/Charts";
// import HomeApp from "../components/Home";


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />

          {/* <Route path='/home/homeapp' exact element={(<HomeApp />)} />
          <Route path='/employees' element={(<Employees />)} />
          <Route path='/customers'  element={(<Customers />)} />
          <Route path='/home/kanban'  element={(<Kanban />)} />
          <Route path='/home/orders'  element={(<Orders />)} />
          <Route path='/home/charts'  element={(<Charts />)} /> */}



          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Main>
      <C.Sidebar>
          <Sidebar />
      </C.Sidebar>
      <C.Nav>
          <div className="navbar">
            <Navbar />
          </div>
      </C.Nav>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Main>
  );
};

export default Home;

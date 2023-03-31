import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import Whats from "../../assets/whats.png";
import insta from '../../assets/instaLogo.png'
import { NavLink, Outlet } from "react-router-dom";
import menu from '../../assets/menuIcon.png'
function Navbar() {
  
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const asideOpenAction = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  const closeSidebar =()=>{
    setSidebarOpen(false)
  }

  return (
    <div className="containerHome">
      <div className={sidebarOpen ? "closeSidebar" : "conteinerSidebar"}>
        <div className="containerLogoSidebar">
          <img className="logoSidebar" src={logo} alt="" />
        </div>
        <div className="containerOptions">
          <NavLink className="optionNAv" onClick={closeSidebar} to='/'>
            <p className="options">Postres</p>
          </NavLink>
          <NavLink className="optionNAv" onClick={closeSidebar} to='/Comidas'>
            <p className="options">Comidas</p>
          </NavLink>
          <NavLink className="optionNAv" onClick={closeSidebar} to='Bebidas'>
            <p className="options">Bebidas</p>
          </NavLink>
        </div>

        <div className="containerFooter">
          <div className="contInfo">
          <img src={Whats} alt="" className="whatsLogo" />
            <a href="https://api.whatsapp.com/send?phone=4494931335" target="_blank" rel={"noreferrer"}>Pedidos: 499-493-13-35</a>
          </div>
          <div className="contInfo">
          <img src={insta} alt="" className="whatsLogo" />
            <a href="https://instagram.com/kawa.ppy?igshid=YmMyMTA2M2Y=" target="_blank" rel={"noreferrer"}>Intagram: Kawappy</a>
          </div>
        </div>
      </div>

      <div className="resMenu">
        <div onClick={asideOpenAction} className="btnOpenMenu">
          <img className="menuButton" src={menu} alt=""/>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar;

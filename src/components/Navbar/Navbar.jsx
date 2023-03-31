import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
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
            <p>Postres</p>
          </NavLink>
          <NavLink className="optionNAv" onClick={closeSidebar} to='/Comidas'>
            <p>Comidas</p>
          </NavLink>
          <NavLink className="optionNAv" onClick={closeSidebar} to='Bebidas'>
            <p>Bebidas</p>
          </NavLink>
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

import React from "react";
import { NavLink, Router } from "react-router-dom";

import Logo from "./Img/Logo.jpg";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="menu">
      <div className="logo">
        <img
          id="logoHenry"
          src= {Logo}  //{Logo}
          width="100"
          height="100"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <div className="titulo-list">
        <h2 className="titulonav">Desarrollos eSigloXXI servicios</h2>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">Inicio</NavLink>
            {/* <NavLink to="rovers">Home</NavLink> */}
            <NavLink to="description">Nosotros</NavLink>
            
            <NavLink to="contactarnos">Contactarnos</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

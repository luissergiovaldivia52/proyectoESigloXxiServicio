import React from "react";
import { NavLink, Router } from "react-router-dom";

import Logo from "../../Img/MARTE.png";

import "./NavBar.css";

function NavBar() {
  return (
    <nav className="menu">
      <div className="logo">
        <img
          id="logoHenry"
          src={Logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <div className="titulo-list">
        <h2 className="titulonav">Photos of  Mars</h2>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">Inicio</NavLink>
            <NavLink to="rovers">Home</NavLink>

            <NavLink to="users">Registrarse</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

import React from "react";
import { NavLink, Router } from "react-router-dom";

import Logo from "./Img/logo_eSiglo.jpg";

import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <img
        id="logoHenry"
        src={Logo} //{Logo}
        width="100"
        height="100"
        className="d-inline-block align-top"
        alt=""
      />

      <div className="enlace">
        <NavLink exact to="/" className="enlace-base">
          Inicio
        </NavLink>
        <NavLink to="description" className="enlace-base">
          Nosotros
        </NavLink>
        <NavLink to="contactarnos" className="enlace-base">
          Contactarnos
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

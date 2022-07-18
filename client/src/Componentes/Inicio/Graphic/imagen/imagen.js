import React, { useEffect, useState } from "react";

import "./imagen.css";

import Man from "../Img/man.png";
import Go from "../Img/logo-golang400.png";
import Exterior from "../Img/circle-logo200.png";
import Interior from "../Img/frame-circle200.png";
import Logo from "../Img/logo200.png";
import Energy from "../Img/energy400.png"

function Imagen() {
  return (
    <div className="imagen">
      <div className="graphic">
        <img className="graphic-man" src={Man} alt="Man" />
        <img className="graphic-go" src={Go} alt="Go" />
      </div>

      <div className="graphic-circle">
        <img className="graphic-logo" src={Logo} alt="Logo" />
        <img className="graphic-exterior" src={Exterior} alt="Exterior" />
        <img className="graphic-interior" src={Interior} alt="Interior" />
        <img className="graphic-energy" src={Energy} alt="Energy" />
      </div>
    </div>
  );
}

export default Imagen;

import React, { useState, useEffect } from "react";

import Imagen from "./Graphic/imagen/imagen";
import EfectoCss from "./efecto";
import Titulo from "./Banner/Titulo/Titulo";
import Description from "./Banner/DescriptionInicio/descriptionInicio.js";

import Mensaje from "../Inicio/Banner/Mensaje/mensaje.js";
import "./variable";

import "./inicio.css";

function Inicio() {
  useEffect(() => {
    //EfectoCss();
  }, []);
  //console.log("variable swap: " +  variable.swap );
  return (
    <section className="main-banner">
      {/* grid-container  */}
      <div className="grid-container">
        {/*   banner-container */}
        <div className="content">
          <Titulo />
          <Description />
        </div>
        <div className="graphic-principal">
          <Imagen />
        </div>
      </div>
    </section>
  );
}
export default Inicio;

import React, { useState, useEffect } from "react";

import Imagen from "./Graphic/imagen/imagen";
import EfectoCss from "./efecto";
import Titulo from "./Banner/Titulo/Titulo";
import Description from "../Inicio/Banner/Description/description.js";

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

        <Titulo />
        <Description />
   
        <Mensaje />
      </div>
      <div className="graphic"> 
      {/*   Graphic */}
      <Imagen /> 
      </div>
    </section>
  );
}
export default Inicio;

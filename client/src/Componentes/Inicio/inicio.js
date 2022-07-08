import React, { useState, useEffect } from "react";

import Imagen from "./imagen/imagen";
import EfectoCss from "./efecto";
import './variable'
import variable from "./variable";
import './inicio.css'


function Inicio() {
 
  useEffect(() => {
    
    EfectoCss();
  }, []);
console.log("variable swap: " +  variable.swap );
  return (
    <div className="diferenteDiv">
      <Imagen />

      <div className="btn">
        <button className="prueba">
        Registrarse
        </button>
       </div>

    </div>
  );
}
export default Inicio;

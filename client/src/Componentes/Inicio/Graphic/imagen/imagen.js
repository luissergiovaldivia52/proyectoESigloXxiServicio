import React, { useEffect, useState } from "react";

import "./imagen.css";

import Man from "../Img/man.png";
import Go from "../Img/logo-golangDraw.png";
import Tecnologia from "../Img/tecnologiasInk.png";
// import Interior from "../Img/frame-circle200.png";
 import Logo from "../Img/logo.png";
// import Energy from "../Img/energyDraw.png"
//import Energy from "../Img/dreamstime.png";
import Energy from "../Img/21157073.png";

function Imagen() {
  return (
    //  <div className="imagen">
      <div className="graphic">
        <img className="graphic-man" src={Man} alt="Man" />
        <img className="graphic-go" src={Go} alt="Go" />, 

      <div className="graphic-circle">
            <img className="graphic-tecnologia" src={Tecnologia} alt="Tecnologia" />
        <img className="graphic-energy" src={Energy} alt="Energy" />
        {/* <img className="graphic-logo" src={Logo} alt="Logo" /> */}
      {/* <img className="graphic-exterior" src={Exterior} alt="Exterior" />
        <img className="graphic-interior" src={Interior} alt="Interior" />*/}
    
      </div>
      </div>

    //  </div>
  );
}

export default Imagen;

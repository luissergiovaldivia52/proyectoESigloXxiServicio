import React from "react";

//import "./imagenDesList.css";

import Siemens from "../ImagenDes/img/Siemens.png";
import ARM from "../ImagenDes/img/arm.jpg";
import Expressjs from "../ImagenDes/img/expressjs.jpg";
import Allen_Bradley from "../ImagenDes/img/Allen_Bradley_Logo.png";
import Javascript from "../ImagenDes/img/javascript.jpg";
import LengC from "../ImagenDes/img/lenguajeC.jpg";
import Nodejs from "../ImagenDes/img/nodejs.png";
import Schneider from "../ImagenDes/img/Schneider_Electric_Logo.png";
import Sequelize from "../ImagenDes/img/sequelize.jpg";

function FunctionImagen(logo) {
    console.log("este es la function" + logo);
  return (
    <div className="gallery">
      <a target="_blank" href={logo}>
        <img src={logo} alt={logo} width="600" height="400" />
      </a>
      <div className="desc">Add a description of the image here</div>
    </div>
  );
}

export default FunctionImagen;

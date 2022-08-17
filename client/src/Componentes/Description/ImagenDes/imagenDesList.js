import React from "react";

//import "./imagenDesList.css";

// import Siemens from "../ImagenDes/img/Siemens.png";
 import ARM from "../ImagenDes/img/arm.png";
 import Siemens from "../ImagenDes/img/siemensLogo.png";

import Expressjs from "../ImagenDes/img/expressjsLogo.png";
import Allen_Bradley from "../ImagenDes/img/allenBradleyLogo.png";
//import Javascript from "../ImagenDes/img/javascript.jpg";
import Javascript from "../ImagenDes/img/javascriptLogo.png";
import LengC from "../ImagenDes/img/lenguajeClogo.png";
import Nodejs from "../ImagenDes/img/nodejsLogo.png";
import Schneider from "../ImagenDes/img/schneiderElectricLogo.png";
import Sequelize from "../ImagenDes/img/sequelizeLogo.png";

import FunctionImagen from "./functionImagen";

function ImagenDesList() {
  return (
    <div className="conteiner-gallery">
      {/* Siemens */}
      <div className="gallery">
        <a target="_blank" href={Siemens}>
          {/* <img src={Siemens} alt="Siemens" width="600" height="400" /> */}
          <img src={Siemens} alt="Siemens"  />
        </a>
        <div className="desc">Siemens</div>
      </div>
      {/* Schneider */}
      <div className="gallery">
        <a target="_blank" href={Schneider}>
          <img src={Schneider} alt="ARM"  />
        </a>
        <div className="desc">Schneider Electric </div>
      </div>
      {/* Allen_Bradley */}
      <div className="gallery">
        <a target="_blank" href={Allen_Bradley}>
          <img src={Allen_Bradley} alt="ARM"  />
        </a>
        <div className="desc">Allen Bradley</div>
      </div>

      {/* ARM */}
      <div className="gallery">
        <a target="_blank" href={ARM}>
          <img src={ARM} alt="ARM" />
        </a>
        <div className="desc">Sistemas embebidos</div>
      </div>

      {/* Javascript */}
      <div className="gallery">
        <a target="_blank" href={Javascript}>
          <img src={Javascript} alt="ARM" />
        </a>
        <div className="desc">Javascript</div>
      </div>
      {/* Nodejs */}
      <div className="gallery">
        <a target="_blank" href={Nodejs}>
          <img src={Nodejs} alt="ARM"  />
        </a>
        <div className="desc">Nodejs</div>
      </div>

      {/* Express */}
      <div className="gallery">
        <a target="_blank" href={Expressjs}>
          <img src={Expressjs} alt="ARM" />
        </a>
        <div className="desc">Express js</div>
      </div>
      {/* Sequelize */}
      <div className="gallery">
        <a target="_blank" href={Sequelize}>
          <img src={Sequelize} alt="ARM"  />
        </a>
        <div className="desc">Sequelize</div>
        <div/>
      
       
         </div>
           {/* LengC */}
            
      <div className="gallery">
        <a target="_blank" href={LengC}>
          <img src={LengC} alt="ARM"  />
        </a>
        <div className="desc">Lenguaje C/C++</div>
      </div>
         </div>
  );
}

export default ImagenDesList;

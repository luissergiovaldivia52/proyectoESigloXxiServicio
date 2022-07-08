import React, { useEffect, useState } from "react";

import "./imagen.css";

import Planet from "../../../Img/planet.jpg";

function Imagen() {


  


  return (
    <div id="inicio">
      <img src={Planet} alt="Mars Planet" />
    </div>
  );
}

export default Imagen;

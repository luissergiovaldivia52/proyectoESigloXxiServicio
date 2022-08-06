import React, { useState, useEffect } from "react";

import "./Formulario.css";

import Form from "./Form/form-container";
import Tecnologia from "../Inicio/Graphic/Img/tecnologias.png";

//import Energy from "../Inicio/Graphic/Img/energyDraw.png";
import Energy from "../Inicio/Graphic/Img/dreamstime.jpg";

function Formulario() {
  useEffect(() => {
    //EfectoCss();
  }, []);
  //console.log("variable swap: " +  variable.swap );
  return (
    <section className="form-banner">
      {/* grid-container  */}
      <div className="grid-container-form">
        {/*   banner-container */}
        {/* <div className="image-stack">
          <div className="image-stack__item image-stack__item—top"> */}
            {/* <img src=”/assets/mi-imagen-1.jpg” alt="primera imagen"> */}
            {/* <img src={Tecnologia} alt="primera imagen" />
          </div>
          <div className="image-stack__item image-stack__item—bottom"> */}
            {/* <img src=/assets/mi-imagen-2.jpg alt="segunda imagen"> */}
            {/* <img src={Energy} alt="segunda imagen" />
          </div> */}
        {/* </div> */}
        {/* <div class="a">
  <p>Contenedor con position: relative</p>
   <p>Contenedor con position: relative</p>
   <p>Contenedor con position: relative</p>
  <p>Contenedor con position: relative</p>
   <p>Contenedor con position: relative</p>
  <div class="b"><p>Contenedor con position: absolute</p></div>
</div> */}

        <Form />
      </div>
      <div className="graphic-form">
        {/*   Graphic */}
        {/* <Imagen />  */}
      </div>
    </section>
  );
}
export default Formulario;

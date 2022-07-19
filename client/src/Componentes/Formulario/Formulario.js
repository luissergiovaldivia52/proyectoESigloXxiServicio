import React, { useState, useEffect } from "react";


import Form from "./Form/form-container";


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
import React, { useState, useEffect } from "react";

import "./Formulario.css";

import Form from "./Form/form-container";

function Formulario() {
  useEffect(() => {
    //EfectoCss();
  }, []);
  //console.log("variable swap: " +  variable.swap );
  return (
    <section className="form-banner">
      {/* grid-container  */}

      <Form />
    </section>
  );
}
export default Formulario;

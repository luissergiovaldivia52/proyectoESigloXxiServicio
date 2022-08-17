import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import NavBar from "./Componentes/NavBar/NavBar";


import Inicio from "./Componentes/Inicio/inicio";
import Formulario from "./Componentes/Formulario/Formulario";
import Footer from "./Componentes/Footer/Footer";

import "./App.css";
import Description from "./Componentes/Description/description.js";

function App() {
  return (
    <div className="App">
  
     <NavBar />

<Routes>
  <Route  exact path="/" element={<Inicio />} /> 
  <Route  path="/description" element={<Description />} />
  {/* <Route  path="/servicios" element={<Servicios />} />
  <Route  path="/proyectos" element={<Proyectos />} /> */}
  <Route  path="/contactarnos" element={<Formulario />} />

</Routes>

   
    

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

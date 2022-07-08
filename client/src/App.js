import React from "react";
import { Route, Router, Routes } from "react-router-dom";

import NavBar from "./Componentes/NavBar/NavBar";
import Detalle from "./Componentes/DataGrid/Detalle";
import Home from "./Componentes/Home/Home";
import Inicio from "./Componentes/Inicio/inicio";
import Formulario from "./Componentes/Formulario/Formulario";
import Footer from "./Componentes/Footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
  
     <NavBar />

<Routes>
  <Route  exact path="/" element={<Inicio />} /> 
  
  <Route  path="/rovers" element={<Home />} />
  {/* <Route exact path="/:photo/:id" element={<Detalle />} /> */}
  {/* <Route exact path="/register" element={<Formulario />} /> */}
</Routes>

   
    

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

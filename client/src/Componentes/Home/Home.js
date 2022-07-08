import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import "../Inicio/inicio";

import { 
  getMartianSolPhoto, 
  setSearch, 
  setFormulario, 
  setPage } 
  from "../../Redux/actions/martianSolAction";

import { getEarthDatePhoto } from "../../Redux/actions/earthDateAction";

import FormularioHome from "./FormularioHome";
import Cards from "../Card/Cards";


import "../Inicio/variable";
import variable from "../Inicio/variable";

import "../Home/Home.css";
import data from "../Card/data";

function Home() {
  const [name, setName] = useState("");
  const [dataFormHom, setDataFormHom] = useState({
    roverName: "curiosity",
    camara: "MAST",
    MartianSun: "1000",
    EarthDate: "",
  });

  //const [search, setSearch] = useState(false);

  const dispatch = useDispatch();

  const photosMarsSun = useSelector((state) => state.photosMarsSun);
  const formulario = useSelector((state) => state.formulario)
  const search = useSelector((state) => state.search)
  const page = useSelector((state) => state.page);

  variable.swap = false;

  let roverName = formulario.roverName;
  let sol = formulario.MartianSun;
  let camara = formulario.camara;
  //let page = 1;
  let earth_date = formulario.earth_date;

  let item = { roverName, sol, camara, earth_date, page };
  //console.log("este es item ", item)

  function getData(val) {
    console.log("getData " + val.target.value);
  }

 

 

  useEffect(() => {
   
      //return dispatch(getMartianSolPhoto({ roverName, sol, camara, earth_date, page }));
      if (search && formulario.formularioOk) {
        
        dispatch(getMartianSolPhoto(item));
        dispatch(setSearch(!search));
        formulario.formularioOk = false;
        dispatch(setFormulario(formulario))
        dispatch(setPage(page + 1));
      

        return 
      }
     
    
  },  [formulario.formularioOk]);
   //[search]);



  return (
    <div className="home">
      <div className="container">
        <div className="child">
          {/* <Counter/> */}

          {/* <FormularioHome formHomeToHome={formHomeToHome} /> */}
          <FormularioHome />
        </div>
      </div>
      <div></div>

      <div className="cards">
        {photosMarsSun? <Cards photosMars={photosMarsSun} /> : null}
      </div>
    </div>
  );
}

export default Home;

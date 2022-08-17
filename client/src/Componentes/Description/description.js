import React from "react";
import "./description.css";
import ImagenDesList from "./ImagenDes/imagenDesList";

function Description() {
  return (
    <div id="description">
      <h1 className="description">
        <br />
        <span className="line-1">Descripcion </span>
        <br />
        <span className="line-2">
        eSigloXXI servicio es una empresa de desarrollo Full Stack Developer
        Web y de Automatismos Industriales.  
        Se manejan las tecnologías:
          <br />
          <br/>
          {/* <span>-Javascript</span>
          <br />
          <span>-React.js</span>
          <br />
          <span>-Node.js</span>
          <br />
          <span>-Express</span>
          <br />
          <span>-Sequelize</span>
          <br />
          <span> -PostgreSQL </span>
          <br />
          <span></span> */}
  <ImagenDesList/>
        </span>
        <br />
        <br />
        <span className="line-2">
          En la actualidad la producción industrial y comerial requiere de una
          base estructural técnica y operativa de alta complejidad. Aspectos
          tales como la eficiencia , seguridad, higiene, sustentabilidad y medio
          ambiente, son de importancia estratégica tanto para el plan de
          negocios como para la imagen de la empresa ante clientes de mercados
          externos e internos, organismos de contralor y la comunidad en
          general.{" "}
        </span>
        <br />
        <br />
        {/* <span className="line-2">
          Sabemos desempeñarnos en ese contexto. Somos un aliado estratégico de
          empresas, negocios, profecionales y personas que requieren alcanzar
          rendimientos operativos de alta exigencia. Porque nos especializamos
          en crear los sitios web o paginas, para ofrecer sus servicios y
          poductos. Otra skill es la instalaciones y mantenimientos de mediana y
          gran escala, tales como instalación, calibración y diseño de máquinas
          y líneas de producción, automatización, electricidad industrial.{" "}
        </span> */}
        <br />
        <br />
        <span className="line-2">
        Porque nos especializamos
en crear los sitios web o paginas, para ofrecer sus servicios y
productos. Otra skill es la instalaciones y desarrollo, 
tales como instalación, calibración y diseño de , automatización, electricidad industrial.{" "}
        </span>
        <br />
        <br />
      </h1>
    
    </div>

  );
}

export default Description;

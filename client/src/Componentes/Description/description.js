import React from "react";
import "./description.css";

import ARM from "../Imagenes/arm.png";

import Siemens from "../Imagenes/siemensLogo.png";

import Expressjs from "../Imagenes/expressjsLogo.png";

import Allen_Bradley from "../Imagenes/allenBradleyLogo.png";

import Javascript from "../Imagenes/javascriptLogo.png";

import LengC from "../Imagenes/lenguajeClogo.png";

import Nodejs from "../Imagenes/nodejsLogo.png";

import Schneider from "../Imagenes/schneiderElectricLogo.png";

import Sequelize from "../Imagenes/sequelizeLogo.png";

function Description() {
  return (
    <div className="main-description">
      <h1>
        eSigloXXI: Soluciones Integrales en Desarrollo Web y Automatización
        Industrial{" "}
      </h1>
      <p>
        En eSigloXXI, combinamos la innovación del desarrollo web Full Stack con
        la eficiencia de la automatización industrial. Nuestro objetivo es
        potenciar tu negocio, optimizando procesos y expandiendo tu presencia
        digital.
      </p>
      <h2>Tu Presencia Online: Desarrollo Web Full Stack</h2>
      <p>
        {" "}
        En la era digital, un sitio web robusto y atractivo es clave. Nos
        especializamos en la creación de sitios web y páginas profesionales
        diseñadas para mostrar tus servicios y productos, conectar con tu
        audiencia y generar nuevas oportunidades de negocio. Utilizamos las
        últimas tecnologías de programación web para ofrecerte una experiencia
        online dinámica y eficiente.
      </p>

      {/*
  <ImagenDesList /> */}
      {/* aqui comienzan las imagenes */}
      <div className="conteiner-gallery">
        {" "}
        <div className="card">
          <div className="img">
            {" "}
            <img src={Siemens} alt="Siemens" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Siemens PLC: Expertos en Programación</h3>
              <p>
                Dominamos la programación de PLCs Siemens con Step 7 y TIA
                Portal. Tu proyecto, nuestra solución.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Schneider} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Schneider Electric PLC: Expertos en Programación</h3>
              <p>
                Desde el diseño hasta la implementación, brindamos soluciones
                integrales en programación de PLCs Schneider Electric,
                adaptándonos a tus requerimientos específicos.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            {" "}
            <img src={Allen_Bradley} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Allen Bradley PLC: Expertos en Programación</h3>
              <p>
                Dominamos la programación de PLCs Allen Bradley. Tu proyecto,
                nuestra solución.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={ARM} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <div>
                {" "}
                <h3>Sistemas embebidos</h3>
                <p>
                  Ofrecemos programación especializada de Microcontrolador
                  STM32, garantizando la eficiencia y fiabilidad que tus
                  sistemas de automatización necesitan.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Javascript} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Desarrollo Web: Javascript</h3>
              <p>
                Programación en Javascript para soluciones web dinámicas y
                modernas.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Nodejs} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Desarrollo Web: Nodejs</h3>
              <p>
                Creamos experiencias web interactivas y funcionales mediante
                programación avanzada en Node js, asegurando un rendimiento
                óptimo.
              </p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            {" "}
            <img src={Expressjs} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Express js</h3>
              <p>Programación Express js</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={Sequelize} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Sequelize</h3>
              <p>Programación ORM Sequelize</p>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="img">
            <img src={LengC} className="item-image" alt="ARM" />
          </div>
          <div className="content">
            <div className="text">
              <h3>Lenguaje C/C++</h3>
              <p>Programación Lenguaje C/C++</p>
            </div>
          </div>
        </div>
      </div>

      <h2>Eficiencia y Seguridad: Automatización Industrial</h2>
      <p>
        La industria moderna exige una base técnica y operativa de alta
        complejidad. En eSigloXXI, abordamos los desafíos de la producción
        industrial y comercial con soluciones de automatización avanzadas.
      </p>

      <p> Nuestra experiencia abarca: </p>
      <p> Instalación y calibración de sistemas de automatización</p>
      <p> Diseño de automatización industrial </p>
      <p> Electricidad industrial </p>
      <p>
        Nos enfocamos en aspectos estratégicos como la eficiencia operativa, la
        seguridad, la higiene, la sustentabilidad y la protección del medio
        ambiente. Estas áreas son fundamentales no solo para tu plan de
        negocios, sino también para fortalecer la imagen de tu empresa ante
        clientes, organismos de control y la comunidad en general. Con nosotros,
        tu infraestructura técnica alcanzará un nuevo nivel de rendimiento y
        confiabilidad.
      </p>
    </div>
  );
}

export default Description;

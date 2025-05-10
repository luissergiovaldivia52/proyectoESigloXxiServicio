import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
//import Whatsapp from "../Inicio/Graphic/Img/whatsappLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      {" "}
      <div className="sociales">
        {" "}
        <a href="">
          {" "}
          <span>Luis Sergio Valdivia</span>
        </a>
        <a
          href="https://wa.me/+5493513110502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enlace a WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="lg" className="icon" />{" "}
          {/* Puedes ajustar el tamaño con la prop 'size' */}
          <span>+54 9 351 3110502</span>
        </a>
        <a
          href="mailto:sergiovaldivia@esigloxxiservicio.com"
          aria-label="Enviar correo electrónico"
        >
          {" "}
          <FontAwesomeIcon icon={faEnvelope} size="lg" className="icon" />
          <span>sergiovaldivia@esigloxxiservicio.com</span>
        </a>
      </div>{" "}
    </div>
  );
}

export default Footer;

// <div className="sociales">
//     {" "}
//     <a href="">
//       {" "}
//       <span>Luis Sergio Valdivia</span>
//     </a>
//     {/* <a href=""> */}{" "}
//     <a
//       href="https://wa.me/+5493513110502"
//       target="_blank"
//       rel="noopener noreferrer"
//       aria-label="Enlace a WhatsApp"
//     >
//       <FontAwesomeIcon icon={faWhatsapp} size="lg" />{" "}
//       {/* Puedes ajustar el tamaño con la prop 'size' */}
//       <span>+54 9 351 3110502</span>
//       {/* <img src="" alt="Whatsapp" /> */}
//     </a>
//     <a
//       href="mailto:sergiovaldivia@esigloxxiservicio.com"
//       aria-label="Enviar correo electrónico"
//     >
//       {" "}
//       <FontAwesomeIcon icon={faEnvelope} size="lg" />
//       <span>sergiovaldivia@esigloxxiservicio.com</span>{" "}
//     </a>
//  </div>{" "}

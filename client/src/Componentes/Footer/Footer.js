import React from "react";
import "./Footer.css";
import Whatsapp from "../Inicio/Graphic/Img/whatsappLogo.png"

function Footer() {
    return (
      <div className="footer">
          <p className="name">Luis Sergio Valdivia</p>
          <div className="phone">
          <img src={Whatsapp} alt="Whatsapp" /> 
          <p className="celular"> +54 9 351 3110502</p>
          </div>
          
          <p className="mail">mail: luis_sergio_valdivia@hotmail.com</p>

      </div>
    );
  }
  
  export default Footer;
  
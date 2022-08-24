import React from "react";
import "./Footer.css";
import Whatsapp from "../Inicio/Graphic/Img/whatsappLogo.png"

function Footer() {
    return (
      <div className="footer">
        <div> <p className="name">Luis Sergio Valdivia</p></div>
        <div> <div className="phone">
          <img src={Whatsapp} alt="Whatsapp" /> 
          <p className="celular"> +54 9 351 3110502</p>
          </div></div>
        <div><p className="mail">mail: luis_sergio_valdivia@hotmail.com</p></div>
         
         
          
          

      </div>
    );
  }
  
  export default Footer;
  
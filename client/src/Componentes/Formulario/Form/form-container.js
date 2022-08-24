import React from "react";
import "./form.css";

function FormContainer() {
  return (
    <section className="main-form">
      <div className="container-Saber">
        <div className="content-form">
          <div className="div-descriptionSaber">
            <h1 className="descriptionSaber">
              <br />
              <span className="line-1-form">Me gustaría saber de usted </span>
              <br />
              <span className="line-2-form">
                Cuando necesite una ayuda, <br/>
                no dude en contactarme. 
                <br />
              </span>
              <br />
              <span className="line-3-form">
                Dirk Kloosterman 1355 B SMATA
                <br />
              </span>

              <span className="line-3-form">
                Córdoba,Argentina
                <br />
              </span>

              <span className="line-3-form">
                i.h.m.p.servicio@gmail.com
                <br />
              </span>

              <span className="line-3-form">
                +54 9 351 3110502
                <br />
              </span>
            </h1>
          </div>

          <form className="form">
            {/*Nombre */}
            <div className="name-apellido">
              <div className="name-label">
                <label>Nombre</label>
              </div>

              <input
                type="text"
                className="name"
                required
                placeholder="Ingresa su nombre"
              />

              {/*Apellido */}
              <div className="apellido-label">
                <label>Apellido</label>
              </div>

              <input
                type="text"
                className="apellido"
                required
                placeholder="Ingresa su apellido"
              />
            </div>
            <br />

            <div className="mail-phone">
              {/*mail*/}
              <div className="mail-label">
                <label>Email</label>
              </div>
              <input
                type="mail"
                name="mail"
                className="input"
                required
                placeholder="Ingresa su correo electronico"
              />
              {/*phone */}
              <div className="phone-label">
                <label>Phone</label>
              </div>
              <input type="text" className="phone" />
            </div>

            {/*address */}
            <div className="address-label">
              <label>Address</label>{" "}
              <input type="text" className="address" />
            </div>

           

            {/*asunto */}
            <div className="asunto-label">
              <label>Asunto</label>
            </div>

            <input type="text" className="asunto" />
            {/*mensaje */}
            <div className="escribe-label">
              <label>Escribe su mensaje aqui</label>
            </div>
            <textarea className="mensaje" required></textarea>
            {/* <input type="text" className="escribe" required /> */}

            <button type="submit" className="button">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;

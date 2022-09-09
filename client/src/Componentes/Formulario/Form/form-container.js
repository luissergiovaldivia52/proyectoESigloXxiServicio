import React, { useState, useEffect } from "react";
import "./form.css";

function FormContainer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(" ");
  const [mail, setMail] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [asunto, setAsunto] = useState(" ");
  const [message, setMessage] = useState(" ");
  const [datos, setDatos] = useState({ name: "nn" });
  const [flag, setFlag] = useState(false);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDatos((datos) => ({
      ...datos,
      ...{
        name: firstName,
        lastName: lastName,
        mail: mail,
        phone: phone,
        address: address,
        asunto: asunto,
        message: message,
      },
    }));

    console.log(datos);
    setDisable(false);
  }, [flag]);

  const toggle = () => {
    setFlag(!flag);
    setDisable(true);
  };

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
                Cuando necesite una ayuda, <br />
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
                +54 351 3110502
                <br />
              </span>
            </h1>
          </div>

          <form className="form">
            {/*Nombre */}
            <div className="name-apellido">
              <div className="name-label">
                <label>
                  First name :{" "}
                  <input
                    type="text"
                    name="fistName"
                    value={firstName.item1}
                    onChange={(event) => setFirstName(event.target.value)}
                  />
                </label>
              </div>

              {/*Apellido */}
              <div className="apellido-label">
                <label>
                  Last name :{" "}
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                  />
                </label>
              </div>
            </div>
            <br />

            <div className="mail-phone">
              {/*mail*/}
              <div className="mail-label">
                <label>
                  Email :{" "}
                  <input
                    type="mail"
                    name="mail"
                    value={mail}
                    required
                    onChange={(event) => setMail(event.target.value)}
                  />
                </label>
              </div>

              {/*phone */}
              <div className="phone-label">
                <label>
                  Phone :{" "}
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </label>
              </div>
            </div>

            {/*address */}
            <div className="address-label">
              <label>
                Address :{" "}
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(event) => setAddress(event.target.value)}
                />
              </label>
            </div>

            {/*asunto */}
            <div className="asunto-label">
              <label>Asunto</label>
            </div>

            <input
              type="text"
              name="asunto"
              value={asunto}
              onChange={(event) => setAsunto(event.target.value)}
            />
            {/*mensaje */}
            <div className="escribe-label">
              <label>Escribe su mensaje aqui</label>
            </div>
            <textarea
              name="message"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            ></textarea>

            <button
              type="submit"
              className="button"
              disabled={disable}
              onClick={toggle}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormContainer;

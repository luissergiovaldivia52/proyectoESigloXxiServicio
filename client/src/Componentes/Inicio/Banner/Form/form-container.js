import React from "react";
import "./form.css";

function FormContainer() {
  return (
    <div className="formContainer">
      <form className="form">
        <input
          type="mail"
          name="mail"
          className="input"
          required
          placeholder="Ingresa tu correo electronico"
        />

        <button type="submit" className="button">
          Registrate
        </button>
      </form>
    </div>
  );
}

export default FormContainer;

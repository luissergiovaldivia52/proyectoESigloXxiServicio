import React from "react";
//import { NavLink } from "react-router-dom";
import "./Card.css";

const Card = ({ image, name, id }) => {
  return (
    <div className="box">
      <img src={image} alt={name} />
      <div className="camara">
        <p>Camara: {name}</p>
      </div>

      <p>ID: {id}</p>

      {/* <NavLink to={`/pokemons/${id}`}>{name}</NavLink> */}
    </div>
  );
};

export default Card;

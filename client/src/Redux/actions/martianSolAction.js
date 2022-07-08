import React, { useState, useDispatch } from "react";

import Axios from "axios";

import { v4 as uuidv4 } from "uuid";

import {
  GET_PHOTO_SOL,
  GET_ALL_PHOTO_SOL,
  SET_NAME,
  SET_PAGE,
  SET_ORDER,
  SET_FILTER,
  SET_FILTER_ORDER,
  FILTER_STATUS,
  SET_FORMULARIO,
  SET_SEARCH,
} from "../types";

export const getMartianSolPhoto = (item) => {
  console.log("get")
  return async (dispatch) => {
    await Axios.get(
      `/rover?roverName=${item.roverName}&sol=${item.sol}&earth_date=${item.earth_date}&camera=${item.camara}&page=1`
    )

      .then((res) => {
        return dispatch({
          type: GET_PHOTO_SOL,
          payload: res.data.result,
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };
};

export const getMartianSolPhotos = (page, order, filter, name) => {
  let paisXPage = 0;

  if (page > 1) {
    paisXPage = 12;
  } else {
    paisXPage = 9;
  }
  return (dispatch) => {
    Axios.get(
      `http://localhost:3001/pokemons?page=${page ? page : 1}&paisXPage=${
        paisXPage ? paisXPage : 9
      }&order=${order ? order : ""}&filter=${filter ? filter : ""}&name=${
        name ? name : ""
      }`
    )
      .then((pokemons) => {
        // if (page === 0) {
        //     console.log("Estoy en la action get ");
        //   pokemons.data = [];
        // }

        return dispatch({
          type: GET_ALL_PHOTO_SOL,
          payload: pokemons.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};
export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const setSearch = (search) => {
  return {
    type: SET_SEARCH,
    payload: search,
  };
};

export const setFormulario = (formulario) => {
  return {
    type: SET_FORMULARIO,
    payload: formulario,
  };
};

export const setOrder = (order) => {
  return {
    type: SET_ORDER,
    payload: order,
  };
};

export const setFilter = (pokemons, filter) => {
  let filtro = [];
  let array = pokemons.result;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].type.length; j++) {
      if (array[i].type[j] === filter) {
        filtro.push(array[i]);
      }
    }
  }

  return {
    type: SET_FILTER,
    payload: {
      filter: filter,
      pokemon: filtro,
    },
  };
};

export const setFilterOrder = (filter) => {
  //console.log("setOrder " + order)
  return {
    type: SET_FILTER_ORDER,
    payload: filter,
  };
};

export const statusFilter = (status) => {
  return {
    type: FILTER_STATUS,
    payload: status,
  };
};

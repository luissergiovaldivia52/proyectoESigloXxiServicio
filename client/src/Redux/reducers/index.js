import {
    GET_ALL_PHOTO_SOL,
    SET_NAME,
    SET_ORDER,
    SET_FILTER,
    SET_FILTER_ORDER,
    SET_PAGE,
    GET_PHOTO_SOL,
    FILTER_STATUS,
    SET_FORMULARIO,
    SET_SEARCH,

} from "../types";

import {
    GET_ALL_PHOTO_EARTH_DATE,

       GET_PHOTO_EARTH_DATE,

} from "../actions/earthDateAction";




const initialState = {
    allphotosol: [],
    photosMarsSun: [],
    name: "",
    order: "",
    filter: "",
    filterOrder: "",
    page: 0,
    size: "",
    formulario:[],
    search: false
    
};

export default function reducer(state = initialState, action) {


    if (action.type === GET_ALL_PHOTO_SOL) {
        return {
            ...state,
            allphotosol: action.payload,
        };
    }

    if (action.type === GET_ALL_PHOTO_EARTH_DATE) {
        return {
            ...state,
            allphotosol: action.payload,
        };
    }

    if (action.type === SET_NAME) {
        return {
            ...state,
            name: action.payload,
        };
    }

    if (action.type === SET_FORMULARIO) {
  
        return {
            ...state,
            formulario: action.payload,
        };
    }

    if (action.type === SET_PAGE) {
        return {
            ...state,
            page: action.payload,
        };
    }

    if (action.type === SET_SEARCH) {
        return {
            ...state,
            search: action.payload,
        };
    }

    if (action.type === SET_ORDER) {
        return {
            ...state,
            order: action.payload,
        };
    }

    if (action.type === SET_FILTER) {
        return {
            ...state,
            size: action.payload.filter,

            pokemon: action.payload.pokemon,
        };
    }
    if (action.type === SET_FILTER_ORDER) {
        return {
            ...state,
            filterOrder: action.payload
        };
    }

    if (action.type === GET_PHOTO_SOL) {
      
        return {
            ...state,
            photosMarsSun: action.payload,
        };
    }

    if (action.type === GET_PHOTO_EARTH_DATE) {
        return {
            ...state,
            photosol: action.payload,
        };
    }

 
    if (action.type === FILTER_STATUS) {
        const newPokemon = state.pokemons.result.filter((c) => {
            return c.status === action.payload;
        });
        return {
            ...state,
            pokemons: {
                ...state.pokemons,
                result: newPokemon,
            },
        };
    }

    return state;
}
import axios from "axios";
export const GET_ALL_PHOTO_EARTH_DATE = "GET_ALL_PHOTO_EARTH_DATE";
export const GET_PHOTO_EARTH_DATE = "GET_PHOTO_EARTH_DATE";


export const getEarthDatePhoto = (roverName, earth_date, camara, page) => {
  return async (dispatch) => {
    try {
      console.log("este es el get photo earth date");
      const result = await axios.get(
        `http://localhost:3001/rover/?roverName=${roverName}&earth_date=${earth_date}&camera=${camara}&page=${page}`
      ); 
      return dispatch({
        type: GET_PHOTO_EARTH_DATE,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
    }
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
    axios
      .get(
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
          type: GET_ALL_PHOTO_EARTH_DATE,
          payload: pokemons.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};


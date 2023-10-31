import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
// export const ORDER = "ORDER";
export const INITIAL_FAVORITES = "INITIAL_FAVORITES";
export const CLEAN_FAVORITES = "CLEAN_FAVORITES";

// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character,
//   };
// };

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    });
  };
};

// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    });
  };
};

export const filterCards = (gender, order) => {
  return {
    type: FILTER,
    payload: { gender, order },
  };
};

// export const orderCards = (order) => {
//   return {
//     type: ORDER,
//     payload: order,
//   };
// };

export const initialFavorites = () => {
  return { type: INITIAL_FAVORITES };
};

export const cleanFavorites = () => {
  return { type: CLEAN_FAVORITES };
};

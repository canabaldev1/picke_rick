import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
// export const ORDER = "ORDER";
export const INITIAL_FAVORITES = "INITIAL_FAVORITES";
export const CLEAN_FAVORITES = "CLEAN_FAVORITES";
export const CLEAR_ALL_FAVORITES = "CLEAR_ALL_FAVORITES";

// export const addFav = (character) => {
//   return {
//     type: ADD_FAV,
//     payload: character,
//   };
// };

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    console.log("entra al dispatch");
    try {
      console.log(character);
      console.log("entra al try");
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    } catch (error) {
      console.log("entra al catch");
    }
  };
};
// export const addFav = (character) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav";
//   return (dispatch) => {
//     axios.post(endpoint, character).then(({ data }) => {
//       return dispatch({
//         type: "ADD_FAV",
//         payload: data,
//       });
//     });
//   };
// };

// export const removeFav = (id) => {
//   return {
//     type: REMOVE_FAV,
//     payload: id,
//   };
// };

// export const removeFav = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: "REMOVE_FAV",
//         payload: data,
//       });
//     });
//   };
// };

export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;

  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    } catch (error) {}
  };
};

export const filterCards = (gender, order, status) => {
  return {
    type: FILTER,
    payload: { gender, order, status },
  };
};

// export const orderCards = (order) => {
//   return {
//     type: ORDER,
//     payload: order,
//   };
// };

export const initialFavorites = () => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return async (dispatch) => {
    const { data } = await axios.get(endpoint);
    return dispatch({ type: INITIAL_FAVORITES, payload: data });
  };
};

export const cleanFavorites = () => {
  return { type: CLEAN_FAVORITES };
};

export const clearAllFavorites = () => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/all";
  return async (dispatch) => {
    const response = await axios.delete(endpoint);
    return dispatch({ type: CLEAR_ALL_FAVORITES, payload: response.data });
  };
};

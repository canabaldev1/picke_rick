export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
// export const ORDER = "ORDER";
export const INITIAL_FAVORITES = "INITIAL_FAVORITES";
export const CLEAN_FAVORITES = "CLEAN_FAVORITES";

export const addFav = (character) => {
  return {
    type: ADD_FAV,
    payload: character,
  };
};

export const removeFav = (id) => {
  return {
    type: REMOVE_FAV,
    payload: id,
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

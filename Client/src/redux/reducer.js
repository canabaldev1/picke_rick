import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  INITIAL_FAVORITES,
  CLEAN_FAVORITES,
  CLEAR_ALL_FAVORITES,
} from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_FAV:
    //   const currentAllCharacters = [...state.allCharacters, action.payload];
    //   const mapChar = new Map();
    //   const allChar = [];

    //   for (const item of currentAllCharacters) {
    //     if (!mapChar.has(item["id"])) {
    //       mapChar.set(item["id"], true);
    //       allChar.push(item);
    //     }
    //   }

    //   return {
    //     ...state,
    //     allCharacters: allChar,
    //   };

    case ADD_FAV:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };

    // case REMOVE_FAV:
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (character) => character.id !== action.payload
    //     ),
    //     allCharacters: state.allCharacters.filter(
    //       (character) => character.id !== action.payload
    //     ),
    //   };

    case REMOVE_FAV:
      return {
        ...state,
        allCharacters: action.payload,
        myFavorites: action.payload,
      };

    case FILTER:
      const { gender, order } = action.payload;
      let filteredFavs = [...state.allCharacters];

      filteredFavs =
        gender === "---"
          ? filteredFavs
          : filteredFavs.filter((char) => char.gender === gender);

      filteredFavs =
        order === "---"
          ? filteredFavs
          : filteredFavs.sort((a, b) => {
              if (order === "A") {
                return a.id - b.id;
              }
              if (order === "D") {
                return b.id - a.id;
              }
              return 0;
            });

      return { ...state, myFavorites: filteredFavs };

    case INITIAL_FAVORITES:
      return { ...state, allCharacters: action.payload };

    case CLEAN_FAVORITES:
      return { ...state, myFavorites: [] };

    case CLEAR_ALL_FAVORITES:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;

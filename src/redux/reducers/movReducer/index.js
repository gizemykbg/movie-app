import {
  ADD_FAVORITES,
  REMOVE_FAVORITES,
  ADD_WATCHLIST,
  REMOVE_WATCHLIST,
} from "../../actions/ActionTypes";

const initial_state = {
  watchlist: [],
  favorites: [],
  message: "",
};
export const movReducer = (state: initial_state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return { ...state, favorites: [...state.movie, action.payload] };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    case "ADD_WATCHLIST":
      return { ...state, watchlist: [...state.movie, action.payload] };
    case "REMOVE_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

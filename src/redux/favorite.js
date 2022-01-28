const ADD_FAVORITES = "ADD_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";

const add_favorites = (id, title, genre) => ({
  type: ADD_FAVORITES,
  payload: { id, title, genre },
});

const delete_favorites = (id) => ({
  type: DELETE_FAVORITES,
  payload: id,
});

const favReducer = (
  favorites = { favoriteMovies: [], totalCount: 0 },
  action
) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...favorites,
        favoriteMovies: [...favorites.favoriteMovies, action.payload],
        totalCount: [...favorites.favoriteMovies].length + 1,
      };
    case DELETE_FAVORITES:
      if (favorites.totalCount > 0) {
        return {
          ...favorites,
          favoriteMovies: [
            ...favorites.favoriteMovies.filter(
              (item) => item.id !== action.payload
            ),
          ],
          totalCount: [...favorites.favoriteMovies].length - 1,
        };
      } else {
        return favorites;
      }
    default:
      return favorites;
  }
};

export default favReducer;
export { add_favorites, delete_favorites };

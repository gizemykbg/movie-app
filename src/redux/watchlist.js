const ADD_WATCHLIST = "ADD_WATCHLIST";
const DELETE_WATCHLIST = "DELETE_WATCHLIST";

const add_watchlist = (id = 1, title = 111, genre = 222) => ({
  type: ADD_WATCHLIST,
  payload: { id, title, genre },
});

const delete_watchlist = (id = 1) => ({
  type: DELETE_WATCHLIST,
  payload: id,
});

const watchlistReducer = (
  watchlist = { watchMovies: [], totalCount: 0 },
  action
) => {
  switch (action.type) {
    case ADD_WATCHLIST:
      return {
        ...watchlist,
        watchMovies: [...watchlist.watchMovies, action.payload],
        totalCount: [...watchlist.watchMovies].length + 1,
      };
    case DELETE_WATCHLIST:
      if (watchlist.totalCount > 0) {
        return {
          ...watchlist,
          watchMovies: [
            ...watchlist.watchMovies.filter(
              (item) => item.id !== action.payload
            ),
          ],
          totalCount: [...watchlist.watchMovies].length - 1,
        };
      } else {
        return watchlist;
      }
    default:
      return watchlist;
  }
};

export default watchlistReducer;
export { add_watchlist, delete_watchlist };

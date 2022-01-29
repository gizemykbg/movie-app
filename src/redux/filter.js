const SET_RATING = "SET_RATING";
const SET_RELEASE = "SET_RELEASE";
const SET_RUNTIME = "SET_RUNTIME";
const SET_GENRE = "SET_GENRE";

const initialFilterState = {
  movies: {
    runtime: {
      value: [0, 240],
    },
    release: {
      value: [1980, 2022],
      valueFormatted: ["1980-01-01", "2022-12-31"],
    },
    rating: {
      value: [0, 100],
      valueFormatted: [0, 10],
    },
    genres: [],
  },
};

const filterReducer = (initialFilterState, action) => {
  switch (action.type) {
    case SET_GENRE:
      return action.payload;
    case SET_RATING:
      return action.payload;
    case SET_RELEASE:
      return action.payload;
    case SET_RELEASE:
      return action.payload;
    default:
      return initialFilterState;
  }
};

export default filterReducer;
export { success_login, error_login };

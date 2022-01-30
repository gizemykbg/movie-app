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
const set_genre = (route, id) => ({
  type: SET_GENRE,
  payload: id,
});

const set_rating = (route, value, valueFormatted) => ({
  type: SET_RATING,
  payload: value,
});
const set_release = (route, value, valueFormatted) => ({
  type: SET_RELEASE,
  payload: value,
});

const set_runtime = (value) => ({
  type: SET_RUNTIME,
  payload: value,
});

const filterReducer = (state: initialFilterState, action) => {
  switch (action.type) {
    case SET_GENRE:
      if (state[action.payload.route].genres.includes(action.payload.id)) {
        return (state[action.payload.route].genres = state[
          action.payload.route
        ].genres.filter((id) => id !== action.payload.id));
      } else {
        return state[action.payload.route].genres.push(action.payload.id);
      }
    case SET_RATING:
      return (state[action.payload.route].rating.valueFormatted =
        action.payload.value.map((v) => v / 10));
    case SET_RELEASE:
      const lowerBound = `${action.payload.value[0]}-01-01`;
      const upperBound = `${action.payload.value[1]}-12-31`;
      return (state[action.payload.route].year.valueFormatted = [
        lowerBound,
        upperBound,
      ]);
    case SET_RUNTIME:
      return (state[action.payload.route].runtime.value = action.payload.value);

    default:
      return initialFilterState;
  }
};

export default filterReducer;
export { set_genre, set_rating, set_runtime, set_release };

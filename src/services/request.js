export const API_KEY = "cf632ca33c3bc7f1552d867d4625a354";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  findGenre: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  fetchDiscover: `/discover/movie?api_key=${API_KEY}`,
};
export default requests;

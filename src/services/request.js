const API_KEY = "cf632ca33c3bc7f1552d867d4625a354";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US`,
  searchUrl: `/search/movie?api_key=${API_KEY}&language=en-US`,
  findGenre: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
};
export default requests;

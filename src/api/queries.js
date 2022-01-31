import requests from "../services/request";
import instance from "../services/instance";
import { API_KEY } from "../services/request";

const fetchPopular = async () => {
  try {
    const { data } = await instance.get(requests.fetchPopular);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchDiscover = async () => {
  try {
    const { data } = await instance.get(requests.fetchDiscover);
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchSelected = async (selectParams) => {
  try {
    const { data } = await instance.get(
      `/movie/${selectParams}?api_key=${API_KEY}&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchSearch = async (value) => {
  try {
    const { data } = await instance.get(
      `/search/movie?api_key=${API_KEY}&query=${value}&page=1`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchDetails = async (movieID) => {
  try {
    const { data } = await instance.get(
      `/movie/${movieID}?api_key=${API_KEY}&append_to_response=credits,external_ids,images,videos,reviews,recommendations&`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
const fetchGenre = async () => {
  try {
    const { genres } = await instance.get(requests.findGenre);
    return genres;
  } catch (error) {
    console.log(error);
  }
};
const fetchFilteredData = async (
  genreChosen,
  rateChosen,
  yearChosen,
  sortChosen
) => {
  try {
    const { data } = await instance.get(
      `/discover/movie/?api_key=${API_KEY}&with_genres=${genreChosen}&vote_average.gte=${rateChosen}&primary_release_year=${yearChosen}&sort_by=${sortChosen}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchPopular,
  fetchDiscover,
  fetchSearch,
  fetchGenre,
  fetchSelected,
  fetchDetails,
  fetchFilteredData,
};

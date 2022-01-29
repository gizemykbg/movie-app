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
const fetchSelected = async (selectedItem) => {
  try {
    const { data } = await instance.get(
      `/movie/${selectedItem}?api_key=${API_KEY}&page=1`
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
const findGenre = async ({ genre }) => {
  try {
    const { data } = await instance.get(requests.searchUrl, genre);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export {
  fetchPopular,
  fetchDiscover,
  fetchSearch,
  findGenre,
  fetchSelected,
  fetchDetails,
};

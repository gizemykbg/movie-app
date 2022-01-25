import React from "react";

import requests from "../services/request";
import instance from "../services/instance";

const fetchPopular = async () => {
  try {
    const { data } = await instance.get(requests.fetchPopular);
    return data;
  } catch (error) {
    console.log(error);
  }
};
// const fetchDocumentaries = async () => {
//   try {
//     const { data } = await axios.get(requests.fetchDocumentaries);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const fetchSearch = async ({ query }) => {
//   try {
//     const { data } = await axios.get(requests.searchUrl, query);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const findGenre = async ({ genre }) => {
//   try {
//     const { data } = await axios.get(requests.searchUrl, genre);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export { fetchPopular };

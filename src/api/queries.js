import React from "react";
import axios from "axios";
import requests from "../services/request";

const fetchPopular = async () => {
  try {
    const { data } = await axios.get(requests.fetchPopular);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchPopular };

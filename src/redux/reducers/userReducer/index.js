import { ADD_USER, DELETE_USER } from "../../actions/ActionTypes";

const INITIAL_STATE = {
  userData: {
    avatarUrl:
      "https://i.picsum.photos/id/1005/150/150.jpg?hmac=-Q1z4K5WO9Q7qDB-R9vrj9440_mRxpeHZMOFHblbB6s",
    username: "giz",
    password: "123321",
    socials: {
      twitter: "https://twitter.com/",
      instagram: "https://www.instagram.com/",
    },
  },
};

export const userReducer = (state: INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "DELETE_USER":
      return action.payload;

    default:
      return state;
  }
};

import { LOGIN_SUCCESS, LOGIN_ERROR } from "../../actions/ActionTypes";

const INITIAL_STATE = {
  isLogin: false,
};

export const loginReducer = (state: INITIAL_STATE, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogin: action.payload,
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        isLogin: action.payload,
      };

    default:
      return state;
  }
};

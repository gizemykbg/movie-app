const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_ERROR = "LOGIN_ERROR";

const success_login = (isLogin = true) => ({
  type: LOGIN_SUCCESS,
  payload: isLogin,
});

const error_login = (isLogin = false) => ({
  type: LOGIN_ERROR,
  payload: isLogin,
});

const loginReducer = (isLogin = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGIN_ERROR:
      return action.payload;
    default:
      return isLogin;
  }
};

export default loginReducer;
export { success_login, error_login };

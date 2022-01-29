const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGOUT = "LOGOUT";

const success_login = (isLogin = true) => ({
  type: LOGIN_SUCCESS,
  payload: isLogin,
});

const logout = (isLogin = false) => ({
  type: LOGOUT,
  payload: isLogin,
});

const loginReducer = (isLogin = false, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT:
      return action.payload;
    default:
      return isLogin;
  }
};

export default loginReducer;
export { success_login, logout };

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const routes = [
  {
    id: 1,
    path: "/",
    element: Login,
    isLogin: false,
    isNav: true,
    name: "Login",
  },
  {
    id: 2,
    path: "/home",
    element: Home,
    isLogin: true,
    isNav: true,
    name: "Home",
  },
];

export default routes;

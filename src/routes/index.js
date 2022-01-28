import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/content/Search";

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
  {
    id: 3,
    element: Search,
    path: "/search",
    isLogin: true,
    isNav: true,
    name: "Search",
  },
];

export default routes;

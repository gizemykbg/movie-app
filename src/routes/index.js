import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/content/Search";
import DetailPage from "../pages/DetailPage";

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
    path: "/movies",
    element: Home,
    isLogin: true,
    isNav: true,
    name: "Movies",
  },
  {
    id: 3,
    element: Search,
    path: "/search",
    isLogin: true,
    isNav: true,
    name: "Search",
  },
  {
    id: 4,
    path: "/movies/:id",
    element: DetailPage,
    isLogin: true,
    isNav: false,
    name: "MovieDetail",
  },
];

export default routes;

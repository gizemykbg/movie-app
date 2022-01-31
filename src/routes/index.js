import Home from "../pages/Home";
import Login from "../pages/Login";
import Search from "../pages/content/Search";
import DetailPage from "../pages/DetailPage";
import Profile from "../pages/Profile";
import FilterPage from "../pages/FilterPage";

const routes = [
  {
    id: 1,
    path: "/",
    element: Home,
    isLogin: true,
    isNav: true,
    name: "Movies",
  },
  {
    id: 2,
    element: Search,
    path: "/search",
    isLogin: true,
    isNav: false,
    name: "Search",
  },
  {
    id: 3,
    path: "/movies/:id",
    element: DetailPage,
    isLogin: true,
    isNav: false,
    name: "MovieDetail",
  },
  {
    id: 4,
    path: "/login",
    isLogin: false,
    name: "Login",
    element: Login,
  },
  {
    id: 5,
    path: "/profile",
    isLogin: true,
    name: "Profile",
    element: Profile,
    isNav: false,
  },
  {
    id: 6,
    path: "/filter",
    isLogin: true,
    name: "Filter",
    element: FilterPage,
    isNav: true,
  },
];

export default routes;

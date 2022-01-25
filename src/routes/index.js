import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

const routes = [
  { id: 1, path: "/", element: Login, isLogin: false },
  { id: 2, path: "/home", element: Home, isLogin: true },
];

export default routes;

import React from "react";
import Routes from "./routes";
import { Route, Routes as Routing } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "./components/Base/Footer";
import Navbar from "./components/Base/Navbar";
import Login from "./pages/Login";
import Error from "./components/Base/Error";
function App() {
  const isLogin = useSelector((state) => state.login);
  console.log(isLogin);
  return (
    <>
      <Navbar />
      <Routing>
        {Routes.filter((item) => item.isLogin === isLogin).map((route) => (
          <Route key={route.id} path={route.path} element={<route.element />} />
        ))}
        <Route path="*" element={<Error />} />
      </Routing>
      <Footer />
    </>
  );
}

export default App;

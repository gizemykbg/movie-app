import React from "react";
import Routes from "./routes";
import { Route, Routes as Routing } from "react-router-dom";
import Navbar from "./components/Globals/Navbar";
import { useSelector } from "react-redux";
import Footer from "./components/Globals/Footer";

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
        <Route path="*" />
      </Routing>
      <Footer />
    </>
  );
}

export default App;

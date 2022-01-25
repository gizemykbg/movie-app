import React from "react";
import Routes from "./routes";
import { Route, Routes as Routing } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routing>
        {Routes
          //.filter((route) => route.isLogin === isLogin)
          .map((route) => (
            <Route
              key={route.id}
              path={route.path}
              element={<route.element />}
            />
          ))}
        <Route path="*" />
      </Routing>
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";

const NavRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route index element={<Home />} /> */}

      <Route path="favorites" element={<Favorites />} />
      {/* <Route path="*" element={<NoPage />} /> */}
      {/* </Route> */}
    </Routes>
  );
};

export default NavRoute;

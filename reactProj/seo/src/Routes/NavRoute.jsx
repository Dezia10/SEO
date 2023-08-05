import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import FavoriteContext from "../store";

const NavRoute = () => {
  const [favs, setFavs] = useState({ favorites: [] });

  return (
    <FavoriteContext.Provider value={[favs, setFavs]}>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route index element={<Home />} /> */}

        <Route path="favorites" element={<Favorites />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </FavoriteContext.Provider>
  );
};

export default NavRoute;

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import FavoriteContext from "../store";
import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../store/firebase";
import Nav from "../UI/Nav";

const NavRoute = () => {
  const [favs, setFavs] = useState({ favorites: [] });
  const [user, setUser] = useState("");
  // let [context, setContext] = useContext(FavoriteContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsLoggedIn((prev) => !prev);
      setUser("" + data.user.email);
    });
  };

  const handleLogOut = () => {
    auth.signOut();
    console.log("signed out");
    setIsLoggedIn((prev) => !prev);
  };

  return (
    <FavoriteContext.Provider value={[favs, setFavs]}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              login={handleLogIn}
              user={user}
              logout={handleLogOut}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route
          path="favorites"
          element={<Favorites user={user} isLoggedIn={isLoggedIn} />}
        />
        <Route path="*" element={<Nav />} />
        {/* </Route> */}
      </Routes>
    </FavoriteContext.Provider>
  );
};

export default NavRoute;

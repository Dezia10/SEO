import React from "react";

const favoriteContext = React.createContext({
  favorites: [],
  addFavorites: () => {},
  removeFavorites: () => {},
});

export default favoriteContext;

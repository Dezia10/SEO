import React, { useContext } from "react";
import favoriteContext from "../store";

import "./Favorites.css";

import { v4 as uuid } from "uuid";

const Favorites = () => {
  let [context, setContext] = useContext(favoriteContext);

  const removeFavorite = (item) => {
    console.log(item);
    const newFiltered = context.favorites.filter((i) => i !== item);

    setContext({ favorites: newFiltered });
  };

  return (
    <div className="quotes-wrapper">
      {context.favorites.length > 0 ? (
        context.favorites.map((item) => (
          <div key={uuid()} className="quotes">
            <li>{item.quote}</li>
            <p>{item.author}</p>
            <button
              onClick={(e) => {
                e.preventDefault();
                removeFavorite(item);
              }}
            >
              Remove from favorites
            </button>
          </div>
        ))
      ) : (
        <p className="favorites-paragraph">You have no favorites</p>
      )}
    </div>
  );
};

export default Favorites;

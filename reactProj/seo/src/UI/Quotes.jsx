import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import "./Quotes.css";
import favoriteContext from "../store";

const Quotes = ({ quotes, searchTerm, text }) => {
  let [context, setContext] = useContext(favoriteContext);

  const filteredQuotes = quotes.filter((item) =>
    item.quote.toLowerCase().includes(searchTerm)
  );
  const submitFavorite = (item) => {
    if (text === "Add to favorites") {
      if (!context.favorites.includes(item)) {
        setContext({ favorites: [...context.favorites, item] });
      }
    }
  };

  return (
    <div className="quotes-wrapper">
      {filteredQuotes.map((item) => (
        <div key={uuid()} className="quotes">
          <li>{item.quote}</li>
          <p>{item.author}</p>
          <button
            onClick={(e) => {
              e.preventDefault();
              submitFavorite(item);
            }}
          >
            {text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Quotes;

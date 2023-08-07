import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import "./Quotes.css";
import favoriteContext from "../store";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../store/firebase";

const Quotes = ({ quotes, searchTerm, text, signedIn, user }) => {
  let [context, setContext] = useContext(favoriteContext);

  const filteredQuotes = quotes.filter((item) =>
    item.quote.toLowerCase().includes(searchTerm)
  );
  const submitFavorite = async (item) => {
    console.log("fired");

    const collectionRef = await doc(db, "favorites", "" + user);

    if (text === "Add to favorites") {
      if (!context.favorites.includes(item)) {
        setContext({ favorites: [...context.favorites, item] });

        setDoc(
          collectionRef,

          {
            ...context.favorites,
            item,
          }
        )
          .then(() => {
            console.log("sent");
          })
          .catch(() => {});
      }
    }
  };

  // console.log(docSnap.data());
  // console.log(context);

  return (
    <div className="quotes-wrapper">
      {filteredQuotes.map((item) => (
        <div key={uuid()} className="quotes">
          <li>{item.quote}</li>
          <p>{item.author}</p>
          {signedIn && (
            <button
              onClick={(e) => {
                submitFavorite(item);
              }}
            >
              {text}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Quotes;

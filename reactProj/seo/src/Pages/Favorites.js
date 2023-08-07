import React, { useEffect, useState } from "react";

import { db } from "../store/firebase";
import { getDoc, doc, setDoc } from "firebase/firestore";
import Nav from "../UI/Nav";

import "./Favorites.css";

import { v4 as uuid } from "uuid";

const Favorites = ({ user, isLoggedIn }) => {
  const [favQuotes, setFavQuotes] = useState([]);

  const removeFavorite = async (item) => {
    // const newFiltered = context.favorites.filter((i) => i !== item);

    const collectionRef = await doc(db, "favorites", "" + user);
    // const docSnap = await getDoc(collectionRef);

    // console.log((await docSnap).data());

    // let x = (await docSnap).data();
    let newArray = favQuotes.filter((obj) => obj !== item);
    setFavQuotes(newArray);
    // console.log(newArray);
    //   let n = x.filter((doc) => "" + doc !== item);
    //   console.log(n);
    // };
    if (newArray.length > 0) {
      setDoc(
        collectionRef,

        { ...newArray }
      );
    } else {
      setDoc(collectionRef, {});
    }

    // setContext({ favorites: newFiltered });
  };

  // const collectionRef = collection(db, "favorites");

  // getDocs(collectionRef).then((snapshot) => {
  //   let quotes = [];
  //   snapshot.docs.forEach((ele) => quotes.push(ele.data()));
  //   console.log(quotes);
  // });

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const collectionRef = await doc(db, "favorites", "" + user);
        const docSnap = await getDoc(collectionRef);

        // console.log((await docSnap).data());

        let x = (await docSnap).data();

        if (Object.keys(x).length > 0) {
          let myArray = [];
          let idArray = new Set();

          for (const key in x) {
            console.log(x[key]);
            if (idArray.has(x[key].quote)) {
            } else {
              myArray.push(x[key]);
              idArray.add(x[key].quote);
            }
          }

          setFavQuotes(myArray);
        }
      } catch {}
    };
    fetchMembers();
  }, [user]);

  // console.log(favQuotes.length);
  // console.log(favQuotes);

  return (
    <div className="quotes-wrapper">
      <Nav isLoggedIn={isLoggedIn} />
      {favQuotes.length > 0 ? (
        favQuotes.map((item) => (
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

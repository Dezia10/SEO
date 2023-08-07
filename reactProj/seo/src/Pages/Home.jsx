import React, { useState, useEffect } from "react";
import Quotes from "../UI/Quotes";
import "./Home.css";
import Nav from "../UI/Nav";

const Home = ({ login, user, logout, isLoggedIn }) => {
  const [quotes, setQuote] = useState([]);
  const [quoteString, setQuoteString] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const quotesGenerated = await fetch("https://dummyjson.com/quotes");
        // );
        const json = await quotesGenerated.json();

        let newQuotes = [...json.quotes];
        // newQuotes = newQuotes.sort(() => Math.random() - 0.5);

        if (quotesGenerated.ok) {
          setQuote([...newQuotes]);
        }
      } catch (err) {}
    };
    fetchMembers();
  }, []);

  console.log(user);

  return (
    <div className="home-wrapper">
      <Nav isLoggedIn={isLoggedIn} />
      <div>
        <input
          type="text"
          onChange={(e) => setQuoteString(e.target.value)}
          placeholder="Search quote..."
          value={quoteString}
        ></input>
      </div>
      {!isLoggedIn ? (
        <button onClick={login}>Sign In With Google</button>
      ) : (
        <button onClick={logout}>Sign Out</button>
      )}
      <Quotes
        quotes={quotes}
        searchTerm={quoteString}
        text="Add to favorites"
        signedIn={isLoggedIn}
        user={user}
      />
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import Quotes from "../UI/Quotes";
import "./Home.css";

const Home = () => {
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

  return (
    <div className="home-wrapper">
      <div>
        <input
          type="text"
          onChange={(e) => setQuoteString(e.target.value)}
          placeholder="Search quote..."
          value={quoteString}
        ></input>
      </div>
      <Quotes
        quotes={quotes}
        searchTerm={quoteString}
        text="Add to favorites"
      />
    </div>
  );
};

export default Home;

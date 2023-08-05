import React, { useState, useEffect } from "react";
import Quotes from "../UI/Quotes";

const Home = () => {
  const [quotes, setQuote] = useState([]);
  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const quotesGenerated = await fetch("https://dummyjson.com/quotes");
        // );
        const json = await quotesGenerated.json();

        if (quotesGenerated.ok) {
          setQuote([...json.quotes]);
        }
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchMembers();
  }, []);
  return (
    <div>
      <div>
        <input type="text"></input>
      </div>
      <Quotes quotes={quotes} />
    </div>
  );
};

export default Home;

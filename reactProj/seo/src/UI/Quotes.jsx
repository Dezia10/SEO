import React from "react";
import { v4 as uuid } from "uuid";
import "./Quotes.css";

const Quotes = ({ quotes }) => {
  return (
    <div className="quotes-wrapper">
      {quotes.map((item) => (
        <div key={uuid()} className="quotes">
          <li>{item.quote}</li>
          <p>{item.author}</p>
          <button>Add to favorites</button>
        </div>
      ))}
    </div>
  );
};

export default Quotes;

import React from "react";
import './SearchBar.css'

function SearchBar({ props }) {
  return (
    <>
      <div className="coin_search">
        <input
<<<<<<< HEAD:crypto-app/src/Components/SearchBar.jsx
          style={{
            padding: "1rem 3rem",
            fontFamily: "sans-serif",
            fontSize: "1.6rem",
          }}
=======
          className="coin_input"
          placeholder="Search Coins..."
>>>>>>> 9bc4a1d1298b1bf2891ac1659df9b629a47b81f2:crypto-app/src/Components/SearchBar/SearchBar.jsx
          type="text"
          value={props.query}
          onChange={(e) => props.setQuery(e.target.value)}
          onBlur={(e) => props.setQuery(e.target.value)}
        />
      </div>
    </>
  );
}

export default SearchBar;

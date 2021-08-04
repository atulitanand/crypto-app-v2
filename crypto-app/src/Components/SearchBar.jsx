import React from "react";

function SearchBar({ props }) {
  return (
    <>
      <div className="searchbar">
        <input
          style={{
            padding: "1rem 3rem",
            fontFamily: "sans-serif",
            fontSize: "1.6rem",
          }}
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

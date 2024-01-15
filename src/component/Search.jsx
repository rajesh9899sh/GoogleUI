import React from "react";

const Search = () => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search Google or type a URL"
        className="searchInput"
      />
      <div className="searchButtons">
        <button className="googleSearchButton">Google Search</button>
        <button className="feelingLuckyButton">I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default Search;

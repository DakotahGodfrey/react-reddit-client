import React from "react";

const SearchInput = () => {
  return (
    <form aria-label="search form">
      <i role="icon" className="material-icons">
        search
      </i>
      <input
        type="search"
        aria-label="search"
        name="search"
        id="search"
        placeholder="Search"
      />
    </form>
  );
};

export default SearchInput;

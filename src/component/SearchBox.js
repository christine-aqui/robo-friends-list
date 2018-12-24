import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search"
        className="ps3 ba b--green bg-lightest-blue w5"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

import React from 'react';


const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar-container">
    <input
      type="text"
      placeholder="Search transactions"
      onChange={(e) => onSearch(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;

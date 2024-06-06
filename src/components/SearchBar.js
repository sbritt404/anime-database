// src/components/SearchBar.js
import React, { useState, useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import '../styles/SearchBar.css';
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { fetchAnimeByTitle } = useContext(AnimeContext);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearch = () => {
    fetchAnimeByTitle(searchTerm);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for anime..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>SEARCH</button>
    </div>
  );
};
export default SearchBar;







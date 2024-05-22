import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAnimeByTitle } from '../redux/animeSlice';
import '../styles/SearchBar.css';


const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        dispatch(fetchAnimeByTitle(searchTerm));
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
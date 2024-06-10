// src/components/NavBar.js
import React, { useState, useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import '../styles/NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { fetchTopAnime, fetchAiringAnime, fetchUpcomingAnime } = useContext(AnimeContext);

  const handleCategoryClick = (category) => {
    setIsOpen(false);
    if (category === 'Top') {
      fetchTopAnime();
    } else if (category === 'Airing') {
      fetchAiringAnime();
    } else if (category === 'Upcoming') {
      fetchUpcomingAnime();
    }
  };

  const categories = ['Top', 'Airing', 'Upcoming'];

  return (
    <div className="navbar">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Close' : 'Menu'}
      </button>
      {isOpen && (
        <ul className="menu">
          {categories.map((category, index) => (
            <li key={index} onClick={() => handleCategoryClick(category)}>{category}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;

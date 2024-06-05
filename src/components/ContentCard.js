// src/components/ContentCard.js
import React, { useContext } from 'react';
import { AnimeContext } from '../context/AnimeContext';
import '../styles/ContentCard.css';

const ContentCard = () => {
  const { animeList, loading, error, setSelectedAnime } = useContext(AnimeContext);
  return (
    <div className="content-area">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {animeList && animeList.map((anime, index) => (
        <div key={index} className="content-card" onClick={() => setSelectedAnime(anime)}>
          <img src={anime.image} alt={anime.title} />
          <h3>{anime.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ContentCard;
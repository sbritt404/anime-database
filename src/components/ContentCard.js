// src/components/ContentCard.js
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { AnimeContext } from '../context/AnimeContext';
import '../styles/ContentCard.css';

const ContentCard = ({ setSelectedAnime }) => {
  const { animeList, loading, error } = useContext(AnimeContext);
  const [selectedAnime, setSelectedAnimeState] = useState(null);

  const handleCardClick = (anime) => {
    console.log("ContentCard: selected anime:", anime);
    setSelectedAnimeState(anime);
  };

  const handleBackClick = () => {
    setSelectedAnimeState(null);
  };

  return (
    <div className="content-area">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!selectedAnime ? (
        animeList && animeList.map((anime, index) => (
          <div key={index} className="content-card" onClick={() => handleCardClick(anime)}>
            <img src={anime.images.jpg.image_url} alt={anime.title} onError={(e) => console.log('Image error:', e)} />
            <h3>{anime.title}</h3>
          </div>
        ))
      ) : (
        <div className="anime-details">
          <button onClick={handleBackClick}>Back</button>
          <img src={selectedAnime.images.jpg.image_url} alt={selectedAnime.title} />
          <h3>{selectedAnime.title}</h3>
          <p>{selectedAnime.synopsis}</p>
          <p>Episodes: {selectedAnime.episodes}</p>
          <p>Score: {selectedAnime.score}</p>
          <p>Rating: {selectedAnime.rating}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

ContentCard.propTypes = {
  setSelectedAnime: PropTypes.func.isRequired,
};

export default ContentCard;

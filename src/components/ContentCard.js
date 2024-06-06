// src/components/ContentCard.js
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AnimeContext } from '../context/AnimeContext';
import '../styles/ContentCard.css';
const ContentCard = ({ setSelectedAnime }) => {
  const { animeList, loading, error } = useContext(AnimeContext);
  // Log the animeList to verify its structure and image URLs
  console.log("ContentCard: animeList is:", animeList);
  return (
    <div className="content-area">
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {animeList && animeList.map((anime, index) => (
        <div key={index} className="content-card" onClick={() => {
          console.log("ContentCard: selected anime:", anime);
          setSelectedAnime(anime);
        }}>
          <img src={anime.images.jpg.image_url} alt={anime.title} onError={(e) => console.log('Image error:', e)} />
          <h3>{anime.title}</h3>
        </div>
      ))}
    </div>
  );
};
ContentCard.propTypes = {
  animeList: PropTypes.arrayOf(PropTypes.shape({
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  })),
  loading: PropTypes.bool,
  error: PropTypes.string,
  setSelectedAnime: PropTypes.func.isRequired,
};
export default ContentCard;







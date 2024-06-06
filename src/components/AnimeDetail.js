// src/components/AnimeDetail.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/AnimeDetail.css';
const AnimeDetail = ({ anime }) => {
  // Log the entire anime object to verify its structure
  console.log("AnimeDetail: anime object:", anime);
  // Check if all necessary properties are available
  if (!anime || !anime.images || !anime.images.jpg || !anime.images.jpg.image_url) {
    return <div>Loading anime details...</div>;
  }
  return (
    <div className="anime-detail">
      <img src={anime.images.jpg.image_url} alt={anime.title} onError={(e) => console.log('Image error:', e)} />
      <h2>{anime.title}</h2>
      <p>{anime.synopsis}</p>
      <p>Release Date: {anime.aired?.prop?.from?.string}</p>
      <p>Total Episodes: {anime.episodes}</p>
    </div>
  );
};
AnimeDetail.propTypes = {
  anime: PropTypes.shape({
    images: PropTypes.shape({
      jpg: PropTypes.shape({
        image_url: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
    synopsis: PropTypes.string,
    aired: PropTypes.shape({
      prop: PropTypes.shape({
        from: PropTypes.shape({
          string: PropTypes.string,
        }),
      }),
    }),
    episodes: PropTypes.number,
  }).isRequired,
};
export default AnimeDetail;








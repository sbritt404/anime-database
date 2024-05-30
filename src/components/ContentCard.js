import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ContentCard.css';
const ContentCard = ({ onAnimeSelect }) => {
  const animeList = useSelector((state) => state.anime.entities);
  const loading = useSelector((state) => state.anime.loading);
  const error = useSelector((state) => state.anime.error);
  console.log('Anime list:', animeList);
  return (
    <div className="content-area">
      {loading === 'pending' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {animeList && animeList.map((anime, index) => (
        <div key={index} className="content-card" onClick={() => onAnimeSelect(anime)}>
          <img src={anime.imageUrl} alt={anime.title} />
          <h3>{anime.title}</h3>
        </div>
      ))}
    </div>
  );
};
export default ContentCard;
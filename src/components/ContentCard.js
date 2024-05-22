import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/ContentCard.css';


const ContentCard = () => {
    const animeList = useSelector((state) => state.anime.entities);
    const loading = useSelector((state) => state.anime.loading);
    const error = useSelector((state) => state.anime.error);
    return (
        <div className="content-area">
            {loading === 'pending' && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {animeList.map((anime, index) => (
                <div key={index} className="content-card">
                    <img src={`https://cdn.mangaeden.com/mangasimg/${anime.im}`} alt={anime.t} />
                    <h3>{anime.t}</h3>
                </div>
            ))}
        </div>
    );
};


export default ContentCard;
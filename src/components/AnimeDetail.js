// src/components/AnimeDetail.js
import React from 'react';
import '../styles/AnimeDetail.css';


const AnimeDetail = ({ anime }) => {
    return (
        <div className="anime-detail">
            <img src={anime.image} alt={anime.title} />
            <h2>{anime.title}</h2>
            <p>{anime.description}</p>
            <p>Release Date: {anime.releaseDate}</p>
            <p>Total Seasons: {anime.totalSeasons}</p>
        </div>
    );
};


export default AnimeDetail;
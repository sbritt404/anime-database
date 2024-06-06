// src/context/AnimeContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';
const AnimeContext = createContext();
export const AnimeProvider = ({ children }) => {
  const [animeList, setAnimeList] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchAnimeByTitle = debounce(async (title) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${title}`);
      setAnimeList(response.data.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, 500);
  const fetchAnimeById = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/full`);
      setSelectedAnime(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log("AnimeProvider: setSelectedAnime is defined:", !!setSelectedAnime);
  return (
    <AnimeContext.Provider value={{
      animeList,
      selectedAnime,
      loading,
      error,
      fetchAnimeByTitle,
      fetchAnimeById,
      setSelectedAnime
    }}>
      {children}
    </AnimeContext.Provider>
  );
};
export { AnimeContext };







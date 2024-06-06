// src/App.js
import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ContentCard from './components/ContentCard';
import AnimeDetail from './components/AnimeDetail';
import { AnimeContext } from './context/AnimeContext';
import './App.css';
const App = () => {
  const { selectedAnime, setSelectedAnime } = useContext(AnimeContext);
  console.log("App: setSelectedAnime is defined:", !!setSelectedAnime);
  console.log("App: selectedAnime is:", selectedAnime);
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <ContentCard setSelectedAnime={setSelectedAnime} />
      {selectedAnime && selectedAnime.images && selectedAnime.images.jpg && selectedAnime.images.jpg.image_url && (
        <AnimeDetail anime={selectedAnime} />
      )} {/* Ensure selectedAnime has required properties before rendering AnimeDetail */}
    </div>
  );
};
export default App;







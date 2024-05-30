import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ContentCard from './components/ContentCard';
import AnimeDetail from './components/AnimeDetail';
import './App.css';


const App = () => {
  const [selectedAnime, setSelectedAnime] = useState(null);
  const handleAnimeSelect = (anime) => {
    setSelectedAnime(anime);
  };


  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <ContentCard onAnimeSelect={handleAnimeSelect} />
      {selectedAnime && <AnimeDetail anime={selectedAnime} />}
    </div>
  );
};


export default App;
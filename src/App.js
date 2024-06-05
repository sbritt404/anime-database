// src/App.js
import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ContentCard from './components/ContentCard';
import AnimeDetail from './components/AnimeDetail';
import { AnimeProvider, AnimeContext } from './context/AnimeContext';
import './App.css';
const App = () => {
  const { selectedAnime } = useContext(AnimeContext);
  return (
    <AnimeProvider>
      <div className="App">
        <NavBar />
        <SearchBar />
        <ContentCard />
        {selectedAnime && <AnimeDetail anime={selectedAnime} />}
      </div>
    </AnimeProvider>
  );
};
export default App;
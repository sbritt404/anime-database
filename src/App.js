// src/App.js
import React, { useContext } from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ContentCard from './components/ContentCard';
import AnimeDetail from './components/AnimeDetail';
import { AnimeContext, AnimeProvider } from './context/AnimeContext';
import './App.css';

const AppContent = () => {
  const { selectedAnime, setSelectedAnime } = useContext(AnimeContext);
  console.log("App: setSelectedAnime is defined:", !!setSelectedAnime);
  console.log("App: selectedAnime is:", selectedAnime);

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      {!selectedAnime ? (
        <ContentCard setSelectedAnime={setSelectedAnime} />
      ) : (
        <AnimeDetail anime={selectedAnime} />
      )}
    </div>
  );
};

const App = () => {
  return (
    <AnimeProvider>
      <AppContent />
    </AnimeProvider>
  );
};

export default App;

// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import ContentCard from './components/ContentCard';
import './App.css'; // Create this CSS file for global styles


const App = () => {
  return (
    <div className="App">
      <NavBar />
      <SearchBar />
      <ContentCard />
    </div>
  );
};


export default App;



// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AnimeProvider } from './context/AnimeContext';
import './index.css';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AnimeProvider>
      <App />
    </AnimeProvider>
  </React.StrictMode>
);







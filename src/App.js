import React from 'react';
import './App.css';
import SearchBar from './components/searchbar'
import { Route } from 'react-router-dom';
import Perros from './components/perros';

function App() {
  return (
    <div className="App">

      <SearchBar />
      <Perros />

    </div>
  );
}

export default App;

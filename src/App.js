import React from "react";
import SearchForm from './components/SearchForm'
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  return (
    <Router>
      <Header />
      <SearchForm />
      <CharacterCard props='' />
    </Router>
  );
}

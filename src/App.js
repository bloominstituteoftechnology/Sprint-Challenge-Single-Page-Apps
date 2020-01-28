import React from "react";
import SearchForm from './components/SearchForm'
import Header from "./components/Header.js";
import CharacterCard from './components/CharacterCard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage'

export default function App() {
  return (
    <Router>
      <Header />
      <SearchForm />
      <Route exact path='/' component={WelcomePage} />
      <Route exact path='/characters' component={CharacterCard} />
    </Router>
  );
}

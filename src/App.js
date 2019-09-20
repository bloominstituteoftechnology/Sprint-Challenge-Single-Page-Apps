import React from "react";

import Header from "./components/Header.js";

import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";

import { Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <main>
      <Header />
      <div><Link to="/characters">Characters Page</Link></div>
      <div><Link to="/">Home Page</Link></div>
      <Route exact path="/" component = {WelcomePage} />
      <Route exact path="/characters" component = {CharacterList} />
      {/* <SearchForm /> */}
    </main>
  );
}

import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import CharacterCard from "./components/CharacterCard";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route } from "react-router-dom";
import axios from "axios";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [characters, setCharacters] = useState([]);
  return (
    <main>
      <Header />

      <Route
        exact
        path="/CharacterList"
        render={props => <SearchForm characters={characters} {...props} />}
      />
      <Route exact path="/" component={WelcomePage} />

      <Route
        exact
        path="/CharacterList"
        render={props => <CharacterList characters={characters} {...props} />}
      />
      <Route path="/CharacterCard/:id" component={CharacterCard} />
    </main>
  );
}

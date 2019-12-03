import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import axios from "axios";

const initialCharacterList = [];
const url = "https://rickandmortyapi.com/api/character/";

export default function App() {
  const [charactersList, setCharactersList] = useState(initialCharacterList);

  const search = e => {
    const searchedItem = e.target.value;
    const searched = charactersList.filter(
      character => character.name === searchedItem
    );
    setCharactersList(searched);
  };

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        setCharactersList(res.data.results);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
        </ul>
      </nav>

      <main>
        <div>
          <Header />
          <SearchForm />
        </div>
        <Route path="/welcome">
          <WelcomePage />
        </Route>

        <Route path="/characters">
          <CharacterList charactersList={charactersList} />
        </Route>
      </main>
    </div>
  );
}

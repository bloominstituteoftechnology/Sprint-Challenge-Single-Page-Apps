import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import SearchForm from "./components/SearchForm";
import axios from "axios";
import "../src/index.css";

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
            <NavLink exact activeClassName="active-nav" to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active-nav" to="/characters">
              Characters
            </NavLink>
          </li>
        </ul>
      </nav>

      <main>
        <div>
          <Header />
        </div>
        <Route path="/welcome" component={WelcomePage} />

        <Route path="/characters">
          <CharacterList charactersList={charactersList} search={search} />
        </Route>
      </main>
    </div>
  );
}

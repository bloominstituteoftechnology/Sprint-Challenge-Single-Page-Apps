import React, { useEffect, useState } from "react";
import styles from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import axios from "axios";
import "../src/index.css";

const initialCharacterList = [];
const url = "https://rickandmortyapi.com/api/character/";

const Nav = styles.nav`
position: relative;
right: 200px;
ul {
  display: flex;
  justify-content: flex-end;
  margin-right: 5px;
  li {
    margin: 20px;
    list-style: none;   
    font-size: 20px;
     
  }
  a {
    text-decoration: none; 
  }
}
`
const StyleNavLink = styles.nav`
background-color: #a7a09d;
color: white;
`

export default function App() {
  const [charactersList, setCharactersList] = useState(initialCharacterList);
  const [searchResults, setSearchResults] = useState("");

  const search = e => {
    const searchedItem = e.target.value.toUpperCase();
    const len = searchedItem.length;
    const searched = charactersList.filter(
      character => (searchedItem === character.name.slice(0, len).toUpperCase()) 
    );
    setSearchResults(searched);
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
      <Nav>
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
      </Nav>

      <main>
        <div>
          <Header />
        </div>
        <Route path="/welcome" component={WelcomePage} />

        <Route path="/characters">
          <CharacterList charactersList={ searchResults ? searchResults : charactersList} search={search} count={searchResults.length}/>
        </Route>
      </main>
    </div>
  );
}

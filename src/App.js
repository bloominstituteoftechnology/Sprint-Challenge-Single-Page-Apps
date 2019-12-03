import React, { useEffect, useState } from "react";
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
    <main>
      <div>
        <Header />
        <SearchForm />
      </div>

      <WelcomePage />
      <CharacterList charactersList={charactersList} />
    </main>
  );
}

import React, { useEffect, useState } from "react";
import Header from "./components/Header.js";
import Axios from "axios";
import { Route, Link } from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import SearchFOrm from './components/SearchForm';


export default function App() {
  useEffect(() => {
    const [characters, setCharacter] = useState([])
    const [charactersToDisplay, setCharactersToDsiplay] = useState()
    Axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(res => {
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log('this is an error', err)
      })
  }, [])
  return (

    <main>
      <Header />
      <div>{characters.map((character) => {
        return (
          <div key={character.id}>
            <Link to={`/Characters/${character.id}`}>{character.name}</Link>
          </div>
        )
      })}
        <Route path="/characters/:id" render={(props) => {
          return <CharacterCard {...props} />
        }} />
        <SearchForm characters={characters} setCharactersToDisplay={setCharactersToDisplay} />
      </div>
    </main>
  );
}

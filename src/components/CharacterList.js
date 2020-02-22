import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard.js";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characterList, setCharacterList ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);
  
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data)
        setCharacterList(response.data.results);
        setSearchResults(response.data.results);
      })
      .catch(error => {console.log(error)})
    }

    getCharacters();
  }, []);

  if (!searchResults) { return (<h2>Loading character data, wait a moment...</h2>)}

  return (
    <section className="character-list">
      <h2>{searchResults.map((character, index) => (
          <CharacterCard character={character} key={index} />
        ))}</h2>
    </section>
  );
}

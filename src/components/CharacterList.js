import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import axios from 'axios';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacter] = useState([]);


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacter(response.data.results);
          console.log(props.handleInput);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getCharacters();
  }, [characters]);

  function checkInput(){
    return characters.name == props.handleInput
  };


  return (
    <section className="character-list">
      <SearchForm/>
        {characters.map(character => (
        <h2>{character.filter(
          checkInput
        )}</h2>
      ))}
    </section>
  );
}
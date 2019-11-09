import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then (response => {
        setCharacters(response.data.results);
        console.log(response.data.results);
      })
      .catch (error => console.log('Error:', error))
  }, [characters]);

  if ( !characters) {
    <p>No characters!</p>
  }

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      {characters.map((char,index) => { <CharacterCard char={char} key={index} />} )}
    </section>
  );
}

import React, { useEffect, useState } from "react";
import SearchForm from './SearchForm';
import axios from 'axios';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res)
      setCharacter(res.data.results)
    })
    
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <SearchForm/>
      <h2>TODO: `array.map()` over your state here!</h2>
      {character.map(char => {
        return (
          <div className='character-container' key={char.id}>
            <img src={char.image}/>
            <h2>Name: {char.name}</h2>
          </div>
        )
      })}
    </section>
  );
}

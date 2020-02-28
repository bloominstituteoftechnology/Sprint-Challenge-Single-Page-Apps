import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [state, setState] = useState([])


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setState(response.data.results)
        console.log(response.data.results)
      })
  }, []);

  return (
    <section className="character-list">
      <div>
        {state.map(character => {
          return <CharacterCard name={character.name} species={character.species}/>
        })}
      </div>
    </section>
  );
}

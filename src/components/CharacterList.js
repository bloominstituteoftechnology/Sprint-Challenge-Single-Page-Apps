import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [state, setState] = useState([])
  const [query, setQuery] = useState('');


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        const searchs = response.data.results.filter(character => character.name.toLowerCase().includes(query.toLowerCase()))
        setState(searchs)
        console.log(response.data.results)
      })
  }, [query]);

  const handleInputChange = element => {
    setQuery(element.target.value);
  }

  return (
    <section className="character-list">
      <div>
         <SearchForm query={query} handleInputChange={handleInputChange}/>

        {state.map(character => {
          return <CharacterCard name={character.name} species={character.species}/>
        })}
      </div>
    </section>
  );
}

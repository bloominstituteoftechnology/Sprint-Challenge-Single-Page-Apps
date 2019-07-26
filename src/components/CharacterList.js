import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacterList(response.data.results)

        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }

    getCharacters();
  }, [])
  return (
    <section className='character-list grid-view'>
      {characterList.map(character => {
  return (
    <Link to = {`/characters/${character.id}`}>
              <CharacterCard 
              character = {character}
              key = {character.id}
              image = {character.image}
              name = {character.name}
              species = {character.species}
              status = {character.status}
              location = {character.location}
              origin = {character.origin}
              />
            </Link>
        )
      })}
    </section>	    
  )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CharacterList = () => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  // console.log('Characters', character)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(reschar => {
        setCharacters(reschar.data.results)
      })
      .catch(error => {
        console.log('Character Error', error)
      })
  }, []);

  return (
    <section className='character-list grid-view'>
      {characters.map(character => (
        <div className='characters' key={character.id}>
          <img 
            className='character-img'
            src={character.image}
            alt={character.name}
          />
          <h2>{character.name}</h2>
          <p>{character.species} {character.status}</p>
          <p>Location: {character.location.name}</p>
          <p>Origin: {character.origin.name}</p>
        </div>
      ))}
    </section>
  );
}

export default CharacterList;
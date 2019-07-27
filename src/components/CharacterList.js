import React, { useEffect, useState } from 'react';

import axios from 'axios'

import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characterList, setCharacterList ] = useState(null)

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacterList(response.data.results)
        console.log(response.data.results)
      })
  }, [])

  if(!characterList) {
    return (
      <div>
        <h1>Loading Character List...</h1>
      </div>
    )
  }

  return (
    <section className='character-list grid-view'>
      {
        characterList.map((character, i) => 
          <CharacterCard
            key = {i}
            character = {character}
          />
        )
      }
    </section>
    )

}
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterAPI, characterAPISet] = useState([])


  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`)
    //https://rickandmortyapi.com/api/character/&format=json
    //https://swapi.co/api/people/?page=${page}&format=json
    //https://rickandmortyapi.com/api/character/?page=2&format=json
    .then(response => {
      characterAPISet(response.data.results)
    })
    .catch(error =>{console.log('error in api request :(')})
  }, [])

  console.log(characterAPI);

  return (
    <section className='character-list grid-view'>
      {characterAPI.map((item) => <CharacterCard key={item.id} 
                                                     {...item}/>

      )}

    </section>
  );

}

import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Card, Image } from 'semantic-ui-react'


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [characterData, setCharacterData] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    
    axios.get('https://rickandmortyapi.com/api/character/')
    
        .then(res => {
            setCharacterData(res.data.results)
        })
        .catch(err => console.log(err));

  }, []);

  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}

      <Card.Group>{characterData.map((character, index) => <CharacterCard       
      image={character.image}
      name= {character.name}
      species= {character.species}
      gender= {character.gender}
      status= {character.status}
      
       />)}</Card.Group>

       
    </section>
  );
}

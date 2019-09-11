import React, { useEffect, useState } from "react";
import axios from "axios";
import {Card, Image} from 'semantic-ui-react';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const id = 
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        console.log(res)
        setCharacters(res.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list grid-view">
      {characters.map(character => (
        <CharacterDetails key={id} character={character} />
      ))}
    </section>
  );
}

function CharacterDetails({character}){
  return(
    <Card className='char-card'>
      <Image src={character.image} alt='character-pic' />
      <Card.Header>{character.name}</Card.Header>
      <p>Status: {character.status}</p>
    </Card>
  );
}

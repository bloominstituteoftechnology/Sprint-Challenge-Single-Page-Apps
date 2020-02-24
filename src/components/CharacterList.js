import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import { Route, Link } from 'react-router-dom';

export default function CharacterList(props) {
  const [characters,changeCharacters] = useState([])
  

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
        .then( response => {
          changeCharacters(response.data.results);
          
        })
        .catch(error => {
          console.log(error)
        })
        
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(characters)
  return (
    <section className="character-list">
      {characters.map((character,i) => {
        return <Link to={`/CharacterList/${character.id}`}><h2 key={i}>{character.name}</h2></Link>
        
      })}
      
      
      <Route path="/CharacterList/:id" render={routeProps => <CharacterCard {...routeProps} characters={characters}/>}/>
    </section>
    
  );
}

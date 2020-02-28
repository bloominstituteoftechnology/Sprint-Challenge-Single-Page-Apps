import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"
import axios from 'axios';
import styled from "styled-components";


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacter] = useState([])
    
 useEffect(() => {
   
    axios
    .get('https://rickandmortyapi.com/api/character/')

    .then(response => {
      setCharacter(response.data.results)
      console.log(response.data.results)
    })
    .catch(error => {
      console.log('Server Error', error);
    })
   
  
  }, []);
 
  return (
    
    <div className="CharacterCard">
      
      {character.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}

    </div>
  );
}

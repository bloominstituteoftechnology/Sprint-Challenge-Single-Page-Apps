import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from './CharacterCard'
import styled from 'styled-components'




const StyledH2 = styled.h2`
width: 40%;
background-color: orange;`

export default function CharacterList() {
  
 
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios.get('https://rickandmortyapi.com/api/character/')
      .then(res=> {
       setCharacters(res.data.results)
      })
      .catch(err => {
        console.log(err.response)
      })
     
  }, []);
  
  
  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {characters.map(character =>(
      <StyledH2><CharacterCard key={character.id} character={character}  /></StyledH2>))}
    </section>
  );
}

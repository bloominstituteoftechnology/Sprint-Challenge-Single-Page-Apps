import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[characters,setCharacters] = useState([])


  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/').then(response=>{
      
      setCharacters(response.data.results)

})
   .catch(error => {
      console.log('Server Error', error);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    
    <div className="CharacterCard">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
      ))}
  <div className ="CharacterCard">

    
  </div>

    </div>
  );

};

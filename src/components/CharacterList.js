import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";



export default function CharacterList() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
  
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results);
    })
    .catch(error => {
      console.log('Server Error: ', error);
    })
  }, []);
//  console.log(characters)
if (!characters) {
  return(
      <div>Loading...</div>
  )
}
  return (
    <div className="character-list grid-view">
    
      {characters.map(character => 
        <CharacterCard key={character.id} character={character} />
      )}

    </div>
  );
}

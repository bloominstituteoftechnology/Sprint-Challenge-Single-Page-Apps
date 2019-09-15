import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';
/* rendering UI using semantic card and icons */
export default function CharacterList() {
  const [chars, setChars] = useState([]);
/* call the chars and set the state of setChars to the axios get api request */
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(response => {
      console.log(response.data.results);
      setChars(response.data.results);
    })
    .catch(err => {
      console.log(err);
    });
  }, []);

/* return div with mapped characters from API data, rendered to client route page through character card function */
  return (
    <div className="character-list grid-view">
      
    {chars.map(character => 
        <CharacterCard 
          image={character.image}
          name={character.name} 
          species={character.species} 
          location={character.location.name} 
          origin={character.origin.name}
          key={character.id} 
        />
        )}
  </div>
  );
};

import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


const apiLink='https://rickandmortyapi.com/api/character/';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(apiLink).then(results => {
      setCharacters(results.data.results);
    }).catch(error => console.log('You made a mistake fetching, stay calm.', error));
  }, []);

  // console.log();

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {
        characters.map(character => 
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />)
        }

    </section>
  );
}
// console.log();


// Fetch a list of characters from the Rick and Morty API's Characters endpoint https://rickandmortyapi.com/api/character/ and render them to the screen.
//  You must display at least one element for each character.
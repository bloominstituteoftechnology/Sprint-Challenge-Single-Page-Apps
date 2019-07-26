import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState();

  const retrieveCharacters = () => {
    (async () => {
      try {
        const response = await Axios.get('https://rickandmortyapi.com/api/character/');
        setCharacterList(response.data.results);
      } catch (e) {}
    })();
  };
  useEffect(retrieveCharacters, []);

  return (
    <section className="character-list grid-view">
      {/* {console.log(characterList)} */}
      {
        characterList
          ? characterList.map(character => (<CharacterCard {...character} />))
          : <h2>Loading Characters...</h2>
      }
    </section>
  );
}

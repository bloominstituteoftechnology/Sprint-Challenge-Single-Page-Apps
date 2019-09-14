import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './components/CharacterCard';

function CharacterList () {
  const [characterList, setCharacterList] = useState ([])
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    const getCharacterList = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/${name}`)
        .then(response => {
          setCharacterList(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }

    getCharacterList();
  }, [name]);


  return (
    <section className="character-list grid-view">
      {characterList.map(character => (
        <CharacterList key={character.name} character={character} />
      ))}
      <h2>Name: ${character.name}</h2>
    </section>
  );
}

export default CharacterList;
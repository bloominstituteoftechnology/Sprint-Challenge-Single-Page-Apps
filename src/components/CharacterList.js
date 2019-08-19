import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      Axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results);
        setChars(res.data.results);
      }).catch(err => {
        console.log('Server Error: ', err);
      });
    }
    getChars();
  }, []);

  return (
    <section className="character-list grid-view">
      {chars.map(char => (
        <CharacterCard  
          key={char.id}
          char={char}
        />
      ))};
    </section>
  );
}

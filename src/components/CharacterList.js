import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [state, setState] = useState([]);

  const [rick, setRick] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getNames = () => {
      Axios
        .get('https://rickandmortyapi.com/api/character/')  
        .then(response => {
          setRick(response.data.results);
        })
        .catch(error => {
          console.log('Server Error', error);
        });
    }

    getNames();
  }, []);

  return (
    <section className="character-list">
      
      <div>
        {rick.map(character => (
          <CharacterCard key ={character.id} character={character} />
        ))}
      </div>
    </section>
  );
}
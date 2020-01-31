import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [char, setChar] = useState([]);
  // TODO: Add useState to track data from useEffect

      useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then(res => {
                console.log(res);
                setChar(res.data.results);
            })
            .catch(err => {
                console.log("failed to load", err);
            });
        // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
        {char.map(item => (
        <CharacterCard info={item}/>
        ))}
    </section>
  );
}

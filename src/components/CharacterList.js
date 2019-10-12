import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [char, setChar] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          setChar(response.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getChars();
  }, []);

  return (
    <div className="char-list">
      {char.map(chars => (
        <CharacterCard key={chars.id} character={chars} />
      ))}
    </div>
  );
}


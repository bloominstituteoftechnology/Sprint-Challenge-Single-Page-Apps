import React, { useEffect, useState } from "react";
import axios from "axios";


const initialCharacterList = []
const url = "https://rickandmortyapi.com/api/character/";

export default function CharacterList() {
  const [charactersList, setCharactersList] = useState(initialCharacterList)

  useEffect(() => {
    axios.get(url)
    .then(res => {
      setCharactersList(res.data.results);
    })
    .catch(err => {
      console.log(err.message);
    })
  }, [])

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

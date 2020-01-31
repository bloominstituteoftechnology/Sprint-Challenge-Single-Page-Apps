import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import Axios from "axios";
import { Link } from "react-router-dom";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [data, updateData] = useState([])

  const searchFunction = array => {
    updateData(array);
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    Axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setCharacters(response.data.results);
      updateData(response.data.results);
    })
    .catch(error => {
      console.log("Error:", error);
    })
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <div style={{marginLeft: "10%"}}>
        <Link to={"/"}>
          Home
        </Link>
        <SearchForm search={searchFunction} characters={characters} />
      </div>
      {data.map(characterArr => {
        return <CharacterCard key={characterArr.id} character={characterArr} />;
      })}
    </section>
  );
}

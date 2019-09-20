import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharacters(response.data.results);
        console.log(response);
      })
      .catch(error => {
        console.log("This is error", error);
      });

    // Axios.get(`https://rickandmortyapi.com/api/character/`)
    //   .then(response => {
    //     setCharacters(response.data);
    //     console.log(response); // data not console logging?
    //   })
    //   .catch(error => {
    //     console.log(error.response);
    //   });
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {/* <div>
        {characters.map(character => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div> */}
      {/* {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))} */}

      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
}

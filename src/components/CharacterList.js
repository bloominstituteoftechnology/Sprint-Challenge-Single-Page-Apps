import React, { useEffect, useState } from "react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {setCharacters(response.data.results)
        // handle success
        console.log(response);
      })
      .catch(error => {
        // handle error
        console.log(error);
      })
      .finally() {
        // always executed
      });
  }, []);
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}
// status && setCharacters(characters => [...characters, status]);
// status

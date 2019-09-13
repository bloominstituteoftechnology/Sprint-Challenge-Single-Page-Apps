import React, { useEffect, useState } from "react";

export default function CharacterList(props) => {
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
          console.error('Server Error', error);
        });
    }

    getMovies();
  }, [name]);


  return (
    <section className="character-list grid-view">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

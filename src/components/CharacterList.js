import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState({})

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const id = props.id;
    // console.log('This is the ID:', id);

    Axios.get(`https://rickandmortyapi.com/api/character/`${id})
          .then(response => {
            setCharacters(response.data)
            // console.log(response);
          })
          .catch(error =>{
            // console.log(response);
          })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

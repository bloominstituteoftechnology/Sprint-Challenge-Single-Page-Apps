import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
      .then(response => {
        // response.data.results has the list
        setList(response.data.results)
      })
      .catch(error => console.log(error))
  }, []);
  
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

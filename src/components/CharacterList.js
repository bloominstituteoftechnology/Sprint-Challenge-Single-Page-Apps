import React, { useEffect, useState } from "react";
import axios from 'axios';
import Charactercard from "./CharacterCard"

function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
    const [character, setCharacterlist] = useState({})

  useEffect(() => {
    const getCharacterList = () => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
          .get(`https://rickandmortyapi.com/api/character/`)
          .then(response => {
            setCharacterlist(response.data);
          })
          .catch(error => {
            console.error(error);
          });
  }
getCharacterList()}, []);

  return (
    <section className="character-list grid-view">
      character.map((props) => {<Charactercard> key={props.id} character={props}
      </Charactercard>
      })
    </section>
  );
}
export default CharacterList;
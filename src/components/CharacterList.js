import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const getCharacters = () => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
        .get("https://rickandmortyapi.com/api/character/")
        .then(response => {
          console.log(response.data);
          setCharacters(response.data.results)
        })
        .catch(error => {
          console.log('Server Error', error);
        });
      }

      getCharacters();
  }, []);

  return (
    <section className="character-list">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      <h2>
        {characters.map(character => (<Link to={`/character/${character.id}`}><CharacterDetails key={character} character={character} /></Link>))}
      </h2>
    </section>
  );
}

function CharacterDetails({ character }) {
  const { name, status, species, gender } = character;
  return (
    <div>
      <h2>{name}</h2>
      <div>
        Status: {status}
      </div>
      <div>
        Species: {species}
      </div>
      <div>
        Gender: {gender}
      </div>
    </div>
  )
}


import React, { useEffect, useState } from "react";
import axios from "axios";

  // TODO: Add useState to track data from useEffect
  const CharacterList = props => {
    const [characters, setCharacters] = useState([])
  useEffect(() => {
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <CharacterDetails key={character.id} character={character} />
      ))}
    </div>
  );
}

function CharacterDetails({ character }) {
  const { name } = character;


return (
  <section className="character-list">
        <div className="">
        Name: <strong>{name}</strong>
      </div>
      {/* <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div> */}
  </section>
);

}

export default CharacterList;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import Character from "./Character";
import SearchForm from "./SearchForm";

function CharacterList(props) {
  const [characters, setCharacters] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharachters = () => {
      axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          const resultsData = response.data.results.filter(character =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase())
          );

          setCharacters(resultsData);
        })
        .catch(error => {
          console.log("Server Error", error);
        });
    };

    getCharachters();
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  /* ============ RETRUN STATEMENT ================== */
  return (
    <div>
      <h2>Characters from the show:</h2>
      <SearchForm handleChange={handleChange} searchTerm={searchTerm} />
      <section className="character-list">
        {/* ========= MAPPING OVER CHARACTERS GETTING DETAILS SENDING THEM TO PROPS OF THE CHARACTER
      COMPONENT ============= */}
        {characters.map(character => (
          <Link key={character.id} to={`/character-list/${character.id}`}>
            <CharacterCard
              {...props}
              key={character.id}
              character={character}
            />
          </Link>
        ))}
      </section>
    </div>
  );
}
/* ============ TAKING IN EACH CHARACHTER OBJET PASSING IT TO CHARACTER CARD*/

export default CharacterList;

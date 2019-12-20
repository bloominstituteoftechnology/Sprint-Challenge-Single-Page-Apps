import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {

  const [ characters, setCharacters ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState(" ");
  const [ searchResults, setSearchResults ] = useState([]);

const handleChange = e => {
  setSearchTerm(e.target.value);
};

useEffect(() => {
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(characters => {
      setCharacters(characters.characters.results)
    })
    .catch(error => {console.log("Houston, we have a problem", error);
  });

}, [searchTerm]);

  return (
    <section className="search-form">
      <form>
        <label htmlFor="title">Search</label>
        <input 
        id="title"
        type="text"
        name="title"
        onChange={handleChange}
        value={searchTerm}
        />
      </form>
      {searchResults.map(char =>(
        <CharacterCard 
        url={char.image} 
        name={char.name} 
        gender={char.gender}
        species={char.species}        
        />
      ))}
    </section>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState(" ");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = e => {
    setSearchTerm(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();

    const filter = props.characters.filter(characters => {
      return characters.name.indexOf(searchResults) !== -1;
    });

    props.search(filter);
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(characters => {
        setCharacters(characters.characters.results);
      })
      .catch(error => {
        console.log("Houston, we have a problem", error);
      });
  }, [searchTerm]);

  return (
    <section className='search-form'>
      <form onSubmit={submitHandler}>
        <label htmlFor='title'>Search</label>
        <input
          id='title'
          type='text'
          name='title'
          onChange={handleChange}
          placeholder='Search for your favorite character...'
          value={searchTerm}
        />
      </form>
      {searchResults.map(char => (
        <CharacterCard
          url={characters.image}
          name={characters.name}
          gender={characters.gender}
          species={characters.species}
        />
      ))}
    </section>
  );
}

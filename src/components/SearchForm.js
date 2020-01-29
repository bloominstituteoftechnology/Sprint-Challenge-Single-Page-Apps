import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';


export default function SearchForm(props) {
  //console.log(props);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        //console.log("look at this", response.data.results);
        const results = response.data.results.filter(characters =>
          characters.name.toLowerCase().includes(search)
        );
        setSearchResults(results);
      })
      .catch(error => {
        console.log(error);
      })
      }, [search]);

    const changeHandler = event => {
      setSearch(event.target.value);
      //console.log(props.search);
    };

    const submitHandler = event => {
      event.preventDefault();
    }
    return (
      <section className="search-form">
        <form onSubmit={submitHandler}>
          <label>Look For...</label>
          <input
            onChange={changeHandler}
            type="text"
            name="name"
            value={search} />

          <button type="submit">Search</button>
        </form>

        {searchResults.map((character => {
          return (
            <CharacterCard
            key={character.index}
            name={character.name}
            status={character.status}
            species={character.species}
            image={character.image}
            />
          )
        }))}
      </section>
    );
  }


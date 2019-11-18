import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

export default function SearchForm() {
  const [data, dataSearch] = useState("");
  const [dataResults, setDataResults] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        const results = response.data.results.filter(characters =>
          characters.name.toLowerCase().includes(data.toLowerCase())
        );
        dataSearch(results);
      })
      .catch(error => {
        console.log(error);
      });
  }, [data]);

  const handleChange = event => {
    setDataResults(event.target.value);
  };

  return (
    <section className="search-form">
      <form>
        <label htmlFor="searchField">Search:</label>
        <input
          onChange={handleChange}
          id="name"
          type="text"
          name="searchField"
          placeholder="Search"
          value={dataResults}
        ></input>
      </form>

      {/* <div className="search-results">
        {dataResults.map(characters => {
          return (
            <CharacterCard
              key={characters.id}
              name={characters.name}
              img={characters.image}
              gender={characters.gender}
              species={characters.species}
              status={characters.status}
            />
          );
        })}
      </div> */}
    </section>
  );
}

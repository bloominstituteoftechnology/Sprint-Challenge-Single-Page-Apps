import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      const data = response.data.results;
      const results = data.filter(item => {
        return item.name.toLowerCase().includes(searchTerm);
      });
      setSearchResults(results);
    });
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="search-form">
      <div>
        <form>
          <label htmlFor="name">Search: </label>
          <input
            id="name"
            type="text"
            name="textfield"
            placeholder="Search"
            onChange={handleChange}
            value={searchTerm}
          />
        </form>

        {searchResults.map(data => {
          return (
            <CharacterCard
              key={data.id}
              image={data.image}
              name={data.name}
              species={data.species}
            />
          );
        })}
      </div>
    </section>
  );
}

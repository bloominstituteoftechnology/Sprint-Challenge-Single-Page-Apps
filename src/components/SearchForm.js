import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";

export default function SearchForm() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const filtered = res.data.results.filter(item => {
          return item.name.toLowerCase().includes(query.toLowerCase());
        });
        setData(filtered);
      })
      .catch(error => console.log("I am error from form axios", error));
  }, [query]);
  const handleChange = e => {
    setQuery(e.target.value);
  };
  return (
    <section className="search-form">
      <form>
        <input
          type="text"
          value={query}
          name="query"
          id="query"
          placeholder="search"
          onChange={handleChange}
        />
      </form>
      {data.map((item, index) => (
        <CharacterCard key={index} info={item} />
      ))}
    </section>
  );
}
import React, { useState } from "react";
import Axios from "axios";

import CharacterCard from './CharacterCard';

export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const onNewSearch = (str) => {
    Axios.get(`https://rickandmortyapi.com/api/character/?name=${str}`)
      .then(res => setSearchResults(res.data.results));
  }

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  return (
    <section className="search-form">
      <form onSubmit={(event) => {
        event.preventDefault();
        onNewSearch(name)
        }}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
      <div className="grid-view">
        {searchResults.map(res => <CharacterCard character={res} />)}
      </div>
    </section>
  );
}

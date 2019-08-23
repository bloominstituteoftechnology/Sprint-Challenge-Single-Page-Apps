import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  // STRETCH TODO: Add stateful logic for query/form data
  const [search, setSearch] = useState({ name: ''});
  const handleInputChange = event => {
    setSearch({...search, name: event.target.value});
  }
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(search.name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={search.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

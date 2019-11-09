import React, { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [names, setNames] = useState({
    name: ""
  })
  const handleChange = (event) => {
    setNames({ ...names, name: event.target.value })
  }

  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(names)}>
        <input
          onChange={handleChange}
          placeholder="name"
          value={names.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
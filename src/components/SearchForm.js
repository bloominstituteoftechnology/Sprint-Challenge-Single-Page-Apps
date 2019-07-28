import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {

  // TODO: Add stateful logic for query/form data
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

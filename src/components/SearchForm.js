import React, { useState } from "react";


export default function SearchForm({ search, setSearch, activateSearch, setStatus }) {
  

  return (
    <section className="search-form">
      <form onSubmit={e => activateSearch(e)}>
        <input type="text" onChange={e =>setSearch(e.target.value)} value={search} />
        <select onChange={e => setStatus(e.target.value)}>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
        </select>
        <button>Find</button>
      </form>
    </section>
  );
}


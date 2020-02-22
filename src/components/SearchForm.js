import React, { useState } from "react";


export default function SearchForm({ search, setSearch, activateSearch }) {
  

  return (
    <section className="search-form">
      <form onSubmit={e => activateSearch(e)}>
        <input type="text" onChange={e =>setSearch(e.target.value)} value={search} />
        <button>Find</button>
      </form>
    </section>
  );
}


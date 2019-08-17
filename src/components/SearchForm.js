import React, { useState } from 'react';

export default function SearchForm({ onSearch }) {
  const [search, setSearch] = useState({name: ""});
  
  const handleInputChange = (event) => {
    setSearch({ ...search, name: event.target.value })
  }

  
  
  return (
    <div className="search-form">
      <form onSubmit={() => onSearch(search)}>
        <input
          
          onChange={handleInputChange}
          
          placeholder="name"
          
          value={search.name}
          
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
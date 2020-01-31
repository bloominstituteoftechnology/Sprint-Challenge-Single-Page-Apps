import React, { useState, useEffect } from "react";

export default function SearchForm({ onChangeKeyword }) {
  const [keyword, setKeyword] = useState('');

  const handleChange = event => {
    setKeyword(event.target.value);
  };

    useEffect(() => {
      onChangeKeyword(keyword);
    }, [keyword]);

  return (
    <section className="search-form">
      <form>
      <label htmlFor="name">Find Your Character: </label>
        <input
          id="name"
          type="text"
          name="searchField"
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
          />
          </form>
    </section>
  );
}

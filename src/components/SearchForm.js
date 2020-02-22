import React, { useState, useEffect } from "react";

export default function SearchForm(props) {

  const [search, setSearch] = useState();

  const handleChange = (event) => {
    //console.log(event.target.value);
    setSearch(event.target.value);
  }

  useEffect(() => {
    const results = props.characterList.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
    );
    props.setSearchResults(results);
  }, [search]);

  return (
    <section className="search-form">
       <label htmlFor="filter">Filter by Name: </label>
       <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
    </section>
  );
}

import React, { useState, useEffect } from "react";

export default function SearchForm() {
 
  const [ search, setSearch ] = useState();

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    const res = props.characterList.filter(character => character.name.toLowerCase().includes(search.toLowerCase()));
    props.setSearch(res);
  }, [search]);


  return (
    <section className="search-form">
     <label>Filter Characters:  </label>
       <input
       text="text"
       placeholder="filter"
       value={search}
       onChange={handleChange} />
     
    </section>
  );
}

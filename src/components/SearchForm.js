import React, { useState } from "react";


export default function SearchForm({ onSearch }) {

  const [person, setPerson] = useState({ name: ""});
  const handleInputChange = e => {
    console.log(e.target.value);
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

//data.results.name

  // STRETCH TODO: Add stateful logic for query/form data
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(person.name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={person.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

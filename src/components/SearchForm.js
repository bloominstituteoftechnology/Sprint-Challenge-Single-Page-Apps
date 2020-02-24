import React, { useState, useEffect } from "react";

export default function SearchForm({ characters }) {
  let list = ["someones", "pat", "joe", "bill", "percy", "yeahhh"];
  const [searchTerm, setSearchTerms] = useState("");
  const [searchResults, setSearchResults] = useState(characters);
  console.log(characters);

  useEffect(() => {
    const results = characters.filter(person => {
      return person.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerms(event.target.value);
  };
  return (
    <section className="search-form">
      <form>
        <label htmlFor="search"> Search</label>
        <input
          id="search"
          name="search"
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div>
        {searchResults.map(character => {
          return <h1>{character}</h1>;
        })}
      </div>
    </section>
  );
}

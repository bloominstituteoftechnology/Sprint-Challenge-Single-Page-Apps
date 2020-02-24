import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
  let list = ["someones", "pat", "joe", "bill", "percy", "yeahhh"];
  const [searchTerm, setSearchTerms] = useState("");
  const [searchResults, setSearchResults] = useState(props.characters);
  console.log("this is from the searchForm component", props.characters);

  useEffect(() => {
    const results = props.characters.filter(character => {
      character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  }, [props.characters, searchTerm]);

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
          return <h1>{character.name}</h1>;
        })}
      </div>
    </section>
  );
}

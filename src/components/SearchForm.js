import React, { useState, useEffect } from "react";
import ReactDom from 'react-dom';

export default function SearchForm(props) {

  

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = props.character.filter(character =>
      
      character.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(results)
    setSearchResults(results);
  }, [searchTerm]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
 
  return (
    <section className="search-form">
     // Add a search form here
     <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(character => (
            <li key={character}>{character}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

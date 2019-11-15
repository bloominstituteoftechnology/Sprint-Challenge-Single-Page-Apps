import React, { useState, useEffect } from "react";
import CharacterList from "./CharacterList"
//import axios from "axios"



export default function SearchForm() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log ()
  CharacterList();
 
  useEffect(() => {

    const newArray = []
    console.log(newArray);



    const newResults = newArray.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(newResults);
  }, [searchTerm]);
   const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search-form">
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className="name-list">
        <ul>
          {searchResults.map(name => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
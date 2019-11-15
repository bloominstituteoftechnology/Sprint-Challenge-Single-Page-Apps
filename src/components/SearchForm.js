import React, { useState, useEffect } from "react";

import axios from "axios"



export default function SearchForm() {
  // searchTerm will save the data from the search input on every occurance of the change event.
  const [searchTerm, setSearchTerm] = useState("");
  // searchResults is used to set the search result.
  const [searchResults, setSearchResults] = useState([]);

 
  useEffect(() => {

    const newArray = []
    console.log(newArray);
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        newArray.push(response.data.results)
      })



    const newResults = newArray.filter(name =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(newResults);
  }, [searchTerm]);
  // The handleChange method takes the event object as the arguement and sets the current value of the form to the searchTerm state using setSearchTerm
  const handleChange = e => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="search-form">
      <form>
        {/* We apply two-way data binding to the input field, which basically takes the value from the user and saves it into the state. */}
        {/* Two-way binding just means that:
        When properties in the model get updated, so does the UI.
        When UI elements get updated, the changes get propagated back to the model. */}
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
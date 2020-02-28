import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchForm() {
let [char, setChar] = useState([]);
let [searchChar, setSearchChar] = useState("");

useEffect(() =>{
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response =>{
      let chars = response.data.results.filter(cha =>
        cha.name.toLowerCase().includes(searchChar.toLowerCase())
        );
        setSearchChar(chars);
    });
}, [searchChar]);

let handleInputChange = event =>{
  setSearchChar(event.target.value);
};

  return (
    <section className="search-form">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={searchChar}
          name="name"
          // tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}

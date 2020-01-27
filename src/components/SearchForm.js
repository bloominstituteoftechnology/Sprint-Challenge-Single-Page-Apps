import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function SearchForm() {
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios 
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      const results = response.data.results.filter(characters =>
        characters.name.toLowerCase().includes(search.toLowerCase())
        );
        setInfo(results);
    })
    .catch(error => {
      console.log(error);
    });
  },[search]);
 
  const handleChange = event => {
    setSearch(event.target.value);
  };

  return (
    <div className="search-form">
     <form>
       <label htmlFor="searchField">Search:</label>
       <input onChange={handleChange} id="name" type="text" name="searchfield" placeholder="Rick Sanchez" value={search}/>
     </form>
     {info.map((character => {
       return(<CharacterCard key={character.id} name={character.name} species={character.species} status={character.status} character={character}/>)
     }
     ))}
    </div>
  );
}

export default SearchForm;
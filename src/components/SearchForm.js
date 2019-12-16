import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {

  const [characters, setCharacter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    axios
    // API Goes in Quotes Behind Get
      .get("https://rickandmortyapi.com/api/character/")
      .then(data => {
        setCharacter(data.data.results);
      })
      .catch(error => {console.log("There's an error", error);
    });

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);

  }, [searchTerm]);
 
  return (
    <section className="search-form">
     <form>
       <label htmlFor="title">Search:</label>
       <input id="title" type="text" name="title" onChange={handleChange} 
       value={searchTerm} />
     </form>
     {searchResults.map(char =>(
       <CharacterCard url={char.image} names={char.name} gender={char.gender} local={char.location.name} specieis={char.species} />
     ))}
    </section>
  );
}

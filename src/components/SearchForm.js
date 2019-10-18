import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    useEffect(() => {
      axios
        .get("https://rickandmortyapi.com/api/character/", {
          params: {
            key: "$2a$10$1sdw09jOfZCj0ChmG9I2g.Q1uMT30My2M/aNAqc.aV3JTyNxb4f2m"
          }
        })
        .then(response => {
          const characters = response.data.results.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
          );
          setData(characters);
        });
    }, [query]);
    

    const handleInputChange = event => {
      setQuery(event.target.value);
    };
    return (
      <div className="character">
        <form className="search">        
          <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          value={query}
          onChange={handleInputChange}/>
          </form>
          {data.map((charac => {          
          return(
            <CharacterCard key={charac.id}
            name={charac.name}
            image={charac.image}
            species={charac.species}
            status={charac.status}
            />
          )
        })
           ) }
          </div>
    )
 
  
          }
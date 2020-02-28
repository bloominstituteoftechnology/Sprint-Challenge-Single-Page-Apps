import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        console.log(response.data.results);
        const characters = response.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        
        setData(characters);
      })
      .catch(error => {
        console.log(error, "axios error")
      })
  }, [query]);
  // this is the function watching for what we put in our input
  const handleInputChange = event => {
    setQuery(event.target.value);
  };


  return (
    <section className="character-list">
      <div>
        <form className="search">
         <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
           />
        </form>
         {data.map(data => {
           return (
         <div key={data.id}>
            <h3 className="capital">Name: {data.name}</h3>
            <h3 className="capital">Status: {data.status}</h3>
            <h3 className="capital">Species: {data.species}</h3>
            <h3 className="capital">Gender: {data.gender}</h3>
          </div>
          );
        })}
      </div>



    </section>
  );
}





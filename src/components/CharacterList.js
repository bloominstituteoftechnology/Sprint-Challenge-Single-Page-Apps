import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "./SearchForm";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const handleChange = event => {
    setSearch(event.target.value);
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(`SUCCESSFUL RESPONSE`, response)
        const characters = response.data.results.filter(
          character =>
            character.name
            .toLowerCase()
            .includes(search.toLowerCase())
        )
        setData(characters)
      })
      .catch(error =>{
        console.log(`FAILED RESPONSE`, error)
      })
  }, [search]);

  if(!data){
    return <div>Loading...</div>
  } else {
    return (
      <div> 
        <h2>Characters</h2>
          <SearchForm  
            data={data}
            handleChange={handleChange}
          />     
      </div> 
    );
  }
  
}

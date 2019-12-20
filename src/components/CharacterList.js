import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"
import axios from "axios";
import SearchForm from "./SearchForm";

const listStyle = {
  display: "grid", 
  gridGap: "2%",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)",
  padding: "2%"}
  

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(`SUCCESSFUL RESPONSE`, response)
      
        setData(response.data.results)

        const characters=response.data.filter(
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

  
  const handleChange = event => {
    setSearch(event.target.value);
  }
  
  
    

  if(!data){
    return <div>Loading...</div>
  } else {

  return (
    <div> 
        <SearchForm handleChange={handleChange} search={search}/> 
      <div className="character-list" style={listStyle}>
        {
        data.map(character => 
        {
          
          return (

          <CharacterCard 
            key={character.id}
            name={character.name}
            image={character.image}
            species={character.species}/>
          );    
      })}
      </div>
    </div>

    );
  }
  
}

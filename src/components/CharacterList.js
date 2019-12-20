import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  // const [search, setSearch] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios 
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(`SUCCESSFUL RESPONSE`, response)
      
        setData(response.data.results)
      })
      .catch(error =>{
        console.log(`FAILED RESPONSE`, error)

      })

  }, []);


  if(!data){
    return <div>Loading...</div>
  } else {

  return (
      <div className="character-list"> {
        data.map((character, index) => 
        {
          
          return (
          <CharacterCard 
            key={index}
            name={character.name}/>
          );    
      })}
      </div>
    );
  }
}

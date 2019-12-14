import React, { useEffect, useState } from "react";
import axios from'axios'
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  axios
  .get('https://rickandmortyapi.com/api/character')
  .then(response => {
    console.log("DATA", response.data.results)
    setCharacters(response.data.results)
  })
  .catch(error =>{
    console.error('Server error', error)
  })
  }, []);

  return (
    <section className="character-list">
      {characters.map(item =>(
        <CharacterCard key ={item.id} item={item}/>
      //  <div key ={item.id}>
      //    <img className="character-image" src={item.image} alt={item.image} />
      //     <h1>{item.name}</h1>
      //  </div>
      ))}
    </section>
  );
}

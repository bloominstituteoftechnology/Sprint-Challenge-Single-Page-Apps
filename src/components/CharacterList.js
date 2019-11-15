import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [Character, GetCharacter]= useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response =>{
      console.log(response.data.results);
      GetCharacter(response.data.results)
    }) 
    .catch (err=>{
      console.log ('failure to get characters')
    })
  }, []);

  return (
    <section className="character-list">
      <h2>Names and Images :)</h2>
      {Character.map((char, id)=> {
        return <CharacterCard key={id} char={char} />
      })}
    </section>
  );
}

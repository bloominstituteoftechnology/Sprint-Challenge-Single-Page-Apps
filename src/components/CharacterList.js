import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery]= useState("")
  

  useEffect(() => {
    Axios.get(`https://rickandmortyapi.com/api/character/`)
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    .then(response =>{
      console.log("I am the axios call from characterList", response)
      const characters = response.data.results.filter(character =>character.name.toLowerCase().includes(query.toLowerCase()));

      setData(characters)
    })
    .catch(error =>{
      console.log("I am the error", error)
    })
  }, [query]);

  return (
    <section className="character-list">
      {/* <h2>map here</h2> */}
      {data.map(character =>(
        <CharacterCard key = {character.id}
        name ={character.name}
        gender ={character.gender}
        species ={character.species}
        type ={character.type}       

        />  
      ))}
      <SearchForm data={data}/>
    </section>
  );
}

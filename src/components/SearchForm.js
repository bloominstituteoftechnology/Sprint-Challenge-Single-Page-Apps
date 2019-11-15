import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";




export default function SearchForm() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

useEffect(()=>{
  axios.get("https://rickandmortyapi.com/api/character/")
  .then (response =>{
    const info = response.data.results.filter(char =>
    char.name.toLowerCase().includes(query.toLowerCase())
    );

    setData (info);
  });
},[query]);


const handleInputChange = event => {
  setQuery(event.target.value);
};
return (
  <div >
    <form >
      <input
      id="name" type="text" name="textfield" placeholder="Search"
      value={query} onChange={handleInputChange}/>
    </form>
    {data.map((character => {
  return(<CharacterCard key={character.id} name={character.name} species ={character.species} status={character.status} character={character}/>)
}
))}
  </div>
)} 

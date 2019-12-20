import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      setCharacter(response.data.results);
    })
    .catch(error => console.log({error}));
  },[]);
  
  return (
    <div>
      <Link to="/">Home</Link>
       {character.map((person,index, image) => (
        <CharacterCard 
          key = {index}
          character = {person}
          image = {image}
        />
       ))}
  </div>
)};

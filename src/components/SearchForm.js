import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";


export default function SearchForm() {

  const [ data, setData ] = useState([]);
  const [ search, setSearch ] = useState("");
 
useEffect(() => {
  Axios
  .get("https://rickandmortyapi.com/api/character/")
  .then (response => {
    const characters = response.data.results.filter(char => char.name.toLowerCase().includes(search.toLocaleLowerCase())
      );
      setData(characters);
  });
  },[search]);

  const HandleChange = event => {
    setSearch(event.target.value)
  };

    return (
      <section className="search-form">
        <TextField
        id="name"
        label="Search Characters"
        type="search"
        margin="normal"
        variant="outlined"
        value={search}
        onChange={HandleChange}
        />
        <Link to="/"><Button>Home</Button></Link>
        

        {data.map((char => {
        return (<CharacterCard 
          key={char.id} 
          name={char.name} 
          species={char.species} 
          status={char.status} 
          imageURL={char.image} 
          gender={char.gender} 
          />
        )})
        )}

      </section>
    )
}
      
      






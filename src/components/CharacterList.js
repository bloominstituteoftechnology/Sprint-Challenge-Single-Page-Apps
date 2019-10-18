import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from 'axios';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [filData, setFilData] = useState([])

  useEffect(() => {
    axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response.data.results)
      setData(response.data.results)
      setFilData(response.data.results)
    })
    .catch(error => {
      console.log(error);
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  useEffect(()=>{
    setFilData(data.filter(character =>
      character.name.toLowerCase().includes(search.toLowerCase())
      )
    )
  },[search])

  const handleInput = e => {
    setSearch(e.target.value);
  };

  return (
    <section className="character-list">
      <div>
      <SearchForm seearch={search} handleInput={handleInput}/>
      </div>
      {filData.map(char => (
        <CharacterCard 
          key={char.id} 
          name={char.name} 
          episode={char.episode} 
          gender={char.gender} 
          image={char.image} 
          species={char.species} 
          status={char.status}
          location={char.location}
          origin={char.origin}/>
      ))}
    </section>
  );
}

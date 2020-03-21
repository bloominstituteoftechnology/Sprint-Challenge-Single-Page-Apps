import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import axios from 'axios';
import styled from "styled-components";

const CardList = styled.div ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  backgroundColor: 'black'
})

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [ characters, setCharacters ] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then (response => {
        let data = response.data.results;
        //console.log(data);
        const newData = data.filter(char => char.name.toLowerCase().includes(search.toLowerCase()));
        setCharacters(newData);
      })
      .catch (error => console.log('Error:', error))
    }, [search]);

  if ( !characters) {
    return <p>No characters!</p>
  }

  const handleChange = event => {
    setSearch(event.target.value);
    //console.log(event.target.value);
  }
  
  return (
    <div>
      <section className="character-list">
        <SearchForm change={handleChange} name={search}/>
        <h1>Characters: </h1>
        <CardList>
        {characters.map(character => { return <CharacterCard key={character.id} character={character} />})}
        </CardList>
      </section>
    </div>
  );
}

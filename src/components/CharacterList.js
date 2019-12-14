import React, { useEffect, useState } from "react";
import axios from'axios'
import CharacterCard from "./CharacterCard"
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
const [characters, setCharacters] = useState([]);
 const APIurl = 'https://rickandmortyapi.com/api/character'

 const setSearchArray = someString => {
  const items = characters.filter(term =>
    term.name.toLowerCase().includes(someString.toLowerCase())
  );
  setCharacters(items);
};
  
  useEffect(() => {
  axios
  .get(APIurl)
  .then(response => {
    setCharacters(response.data.results)
  })
  .catch(error =>{
    console.error('Server error', error)
  })
  }, []);

  return (
    
    <section className="character-list">
      <SearchForm characters={characters}
      SearchArray={setSearchArray}/>
      {characters.map(item =>(
        <CharacterCard key ={item.id} item={item}/>
      ))}
    </section>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard"


export default function SearchForm() {
 const [searchNames, pushNames]=useState([]);
 const [CurrentSearch, ChangeSearch]=useState('');

 useEffect(() => {
   axios.get('https://rickandmortyapi.com/api/character/')
   .then(res => {
     console.log(res.data.results);
     const characters= res.data.results;
     const characterresults=characters.filter(character => { 
       return character.name.toLowerCase().includes(CurrentSearch.toLowerCase());
      })

      pushNames(characterresults);
    })
   .catch(error=> {
     console.log('error');
   })

   }, [searchNames]);

   const onSearchChange= e => {
     ChangeSearch(e.target.value);
     console.log(ChangeSearch);
   }
  return (
    <section className="search-form">
     <form>
       <input 
       id="name"
       type="text"
       placeholder="Search"
       value={CurrentSearch}
       onChange={onSearchChange} />

     </form>
     {
       searchNames.map((character, index) => {
         return(
           <CharacterCard key={index} character={character} />
         )
       })
     }
    </section>
  );
}

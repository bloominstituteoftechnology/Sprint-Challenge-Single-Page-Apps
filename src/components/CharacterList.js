import React, { useEffect, useState } from "react";
import Axios from 'axios';
import CharacterCard from './CharacterCard';
// import SearchForm from "./OLDSearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [query, setQuery]= useState("");


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
 
   

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  return (
    <div className="character-div">    
     
      
     <div>
     <form className = "search" >     
       <input className ="input"
       id = "search"
       type ="text"
       name = "name"
       tabIndex = "0"      
       onChange = {handleInputChange}
       placeholder = "Type here"
       value = {query} 
       autoComplete ="off"
       />      
     </form>
     </div>

      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {/* <h2>map here</h2> */}

     <div className ="character-list">
      {data.map(character =>{
       return(
         
        <CharacterCard key = {character.id}
        name ={character.name}
        gender ={character.gender}
        species ={character.species}
        type ={character.type}       

        /> 
      )})}
      </div>
     

     {/* <SearchForm data={data}/> */}
    </div>
  );
}
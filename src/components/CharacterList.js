import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";
import {Link} from "react-router-dom";

 function CharacterList() {

  const[character, setCharacter] = useState([])
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
      Axios
      //  .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data.results)
        // console.log(response.data.results)
      })
      .catch(error =>{
        console.error('Server error', error)
      })

      
    
    // TODO: Add API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
}, []);



  return (
    <section className="character-list">
      <Link to= {"/Home"}>
      <button>Home</button>
      </Link>
      <h2>The Toons!!!</h2>
      <div>
        {character.map(char => (
        <CharacterCard 
        key = {char.id} 
        name = {char.name} 
        species={char.species} 
        status={char.status} 
        />
        
  ))}
      </div>
      <Link to= {"/Home"}>
      <button>Home</button>
      </Link>

    </section>
    
  );
}
export default CharacterList;

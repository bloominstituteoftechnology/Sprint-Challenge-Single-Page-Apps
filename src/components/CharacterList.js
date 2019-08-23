import React, { useEffect, useState } from "react";


import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import CharacterCard from "./components/CharacterCard";
import {Link} from 'react-router-dom';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
   
     const [characters, setCharacters] = useState([])


  useEffect(() => {
    /* TODO: Add API Request here - must run in `useEffect`
      Important: verify the 2nd `useEffect` parameter: the dependancies array!*/
      
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacters(response.data);
        console.log(response);
      })
      .catch(error => {
        console.error(error);
      });
    


  }, []);

  return (

    

    <section className="character-list grid-view">

    <h2>Characters</h2>


      {/* <h2>TODO: `array.map()` over your state here!Characters</h2> */}
       {characters.map(character => (
        
        <Link to={`/components/${character.id}`}>
       
        </Link>
     
    
      ))} 

    </section>
  );
}

import React, { useEffect, useState } from "react";

import Axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  
  const[cartoonChar,setCartoonChar] = useState();

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   
  Axios
  .get(`https://rickandmortyapi.com/api/character/`) // JSON object here
  .then( response => {

    setCartoonChar(response.data.results);

  })   
  .catch( error =>{

    console.log("Another Error?, WT...?", error); // Another Error? 

  });


  }, []);

  
  // Check for a valid character
  if (!cartoonChar) {

    return <div>Loading....</div>

  }

  else {

    return 
    <section> <h1> 
      {cartoonChar.map((oneperson) => 
          <CharacterCard tileData = {oneperson}/> 
        )}
    </h1></section>


  }


}

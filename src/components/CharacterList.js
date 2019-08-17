import React, { useEffect, useState } from "react";

import Axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {  
  
  const[cartoonChar,setCartoonChar] = useState();

  useEffect(() => {
     
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

    return <section className='character-list grid-view'>

      <div className='theCharacters'>

        {cartoonChar.map((oneperson) => 
          <CharacterCard tileData = {oneperson}/> 
        )}

      </div>
    </section>

       }
}

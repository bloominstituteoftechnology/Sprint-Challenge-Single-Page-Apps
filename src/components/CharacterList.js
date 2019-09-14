import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from './LocationCard'




export default function CharacterList(props) {
  
  console.log('CList', props)
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([])
  useEffect(() => {
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      Axios.get('https://rickandmortyapi.com/api/character/')
      .then(res=> {
       setCharacter(res.data)
      })
      .catch(console.log)
     
  }, [character]);
  
  
  return (
    <section className="character-list grid-view">
      {/* <h2>TODO: `array.map()` over your state here!</h2> */}
      {character.map(people =>(
      <LocationCard key={people.id} people={people} />))}
    </section>
  );
}

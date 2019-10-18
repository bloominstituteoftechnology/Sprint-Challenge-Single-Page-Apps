import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array! 
    axios
        .get(`https://rickandmortyapi.com/api/character/`)
        .then(response => {
          console.log("From CharacterCard:" , response.data.results)
          const characterData = response.data.results

          setInfo(characterData)
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    
  }, []);

  return (
    <section className="character-list">
      
      {info.map((item, id) => {
            return (
                <Character 
                  key={id} 
                  name={item.name} 
                  status={item.status} 
                  species={item.species} 
                  type={item.type} 
                />
            );
          })}
    </section>
  );
}

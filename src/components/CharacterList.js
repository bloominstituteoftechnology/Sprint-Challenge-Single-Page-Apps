import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [info, setInfo] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
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

import React, { useEffect, useState } from "react";
import Axios from "axios";

function CharacterList() {
  const[toons, setToons] = useState([])


  useEffect(() => {

    Axios.get("https://rickandmortyapi.com/api/character/")
    .then(res => {
      setToons(res.data.results);
    })
    .catch(error => {
      console.log(error)
    })
    
  }, [toons])

  return (
    <section className="character-list">
      {toons.map(toon => {
     return(
      <div>
        <h2>{toon.name} </h2>
        
      </div>
     )
      })}
    </section>
  );
}
export default CharacterList;

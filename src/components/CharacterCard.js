import React from "react";

export default function CharacterCard(props) {
  console.log("props toon",props.toon)

  
  
  {props.toons.map(toon => {

     toon.find(
      findToon => findToon.id === Number(props.match.params.id) )

    return( 
     
       <div key={toon.id}>
    <p>{toon.species}</p>
    <p>{toon.status}</p>
    <p>{toon.location}</p>
  </div>  
      
     
  )})}

}

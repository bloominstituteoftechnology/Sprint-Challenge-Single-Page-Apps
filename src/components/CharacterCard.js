import React from "react";

  function CharacterCard(props) {

    
  return (
    <div>
    <h1>Name: {props.name}</h1> 
    <p>Species {props.species}</p>
    <p>Status {props.status}</p>
  </div>
  )


  
}
export default CharacterCard;
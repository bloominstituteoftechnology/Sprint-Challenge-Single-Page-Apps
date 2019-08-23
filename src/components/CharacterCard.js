import React from "react";

export default function CharacterCard(props) {


  return (

    <div>
      
      <img src={props.image} />
      <h2> {props.name} </h2>
      <p> {props.species} </p>
      <p> {props.gender} </p>
      <p> {props.status} </p>

    </div>



  );
  
  
  
}

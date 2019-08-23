import React from "react";

export default function LocationCard(props) {
  return (
  
  <div>
  
    <h3> {props.name} </h3>
    <p> Type: {props.type} </p>
    <p> Dimension: {props.dimension} </p>
    <p>Residents: {props.residents}</p>



  </div>



  );


}

import React from "react";

/*{ name, type, dimension, residents }*/

export default function LocationCard(props) {
  return (
    <div className="location">
      <h2>{props.name}</h2>
      <div className="info-wrap">
        <p>{props.type}</p>
        <p>{props.dimension}</p>
        <p>Residents: {props.residents}</p>
      </div>
    </div>
  )
}

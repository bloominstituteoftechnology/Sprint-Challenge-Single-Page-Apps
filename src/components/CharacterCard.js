import React from "react";

export default function CharacterCard(props) {
  return (
    <div className="character">
      <img src={props.image} />
      <div className="info-wrap">
        <h2>{props.name}</h2>
        <p>{props.species}</p>
        <p>Location: {props.location}</p>
      </div>
    </div>
  )
}

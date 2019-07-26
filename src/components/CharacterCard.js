import React from 'react'

export default function CharacterCard (props) {
  console.log(props.id)

  return (
    <div>
      <img src={props.image} alt="image"></img>
      <div>
        <h2>{props.name}</h2>
        <h3>{props.status}</h3>
        <h3>{props.species}</h3>
      </div>
    </div>
  );
}

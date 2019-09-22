import React from "react";


const CharacterCard = props => {

  return (

    <div className="card" key={CharacterCard.id}>
      <className src={props.image} alt="character Image" />
      <h1 className="character-name">{props.name}</h1>
      <p className="character-status">Status{props.status}</p>
      <p className="character-species">Species{props.species}</p>
      <p className="character-gender">Status{props.gender}</p>
    </div>

  )
}

export default CharacterCard


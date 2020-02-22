import React from "react";
import { Link } from "react-router-dom";
import Character from "./Character";


export default function CharacterCard(props) {

  const char = props.character;
  console.log(props)
  return (
    <div>
      <img src={char.image} />
      <p>{char.name}</p>
      <p>{char.status}</p>
      <p>{char.species}</p>
      <p>{char.gender}</p>

      <Link to={`/characters/${(char.id)}`}><button>View Character</button></Link>
      <Link to={`/characters/`}><button>Go Back</button></Link>
    </div>
  );
}

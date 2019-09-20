import React, { useState, useEffect } from "react";
import axios from "axios";



const CharacterCard = props => {
  const [character, setCharacter] = useState();

  useEffect(() => {
    const id = 1;
    // const id = props.match.params.id;

    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <span>
      <h2>
        {props.name}
        {props.status}
        {props.species}
        {props.type}
        {props.gender}



      </h2>
    </span>
  )
}

export default CharacterCard;
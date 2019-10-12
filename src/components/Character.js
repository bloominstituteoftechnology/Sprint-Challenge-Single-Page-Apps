import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const Character = (props) => {
  const [char, setChar] = useState();
 console.log(props.match.params.id);
  useEffect(() => {
    const id = props.match.params.id;

       axios
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
          setChar(response.data);
        })
        .catch(err => { 
          console.error(err);
        });

  },[props.match.params.id]);
  
  if (!char) {
    return <div>Loading character information...</div>;
  }

  return (
    <CharacterCard character={char} />
  );
}

export default Character;
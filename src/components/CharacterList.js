import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';



  // TODO: Add useState to track data from useEffect

   // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

const CharacterList = (props) => {
    const [characters, setCharacters] = useState([])
  
    useEffect(() => {

      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log('character data:', res.data.results);
          setCharacters(res.data.results);
        })
        .catch(error => {
          console.error(error);
        });
    }, [props.match.params.id]);

 if (!characters) {
    return <div>Loading character information...</div>;
  }

    return (
      <div>
        <CharacterCard characterData={characters} />
      </div>
    );
}

export default CharacterList
  
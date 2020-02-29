import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  // const { id } = useParams();

  useEffect(() => {
    const getCharacters = ()=>{
      axios
        .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
        .then(response => {
          setCharacters(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        },[]);
    
      }

      getCharacters();
    
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  },[]);

  console.log('characters',characters);
    if(characters.length<= 0){
      return <h1>loading..</h1>
    }else{
      return (
        <Link to={`/characters/${characters.results.id}`}>
        <section className="character-list">
          
          {characters.results.map(character =>{
           return <CharacterCard key={character.id} character={character}/>
          })}
        </section>
        </Link>
      );
    }
 
}

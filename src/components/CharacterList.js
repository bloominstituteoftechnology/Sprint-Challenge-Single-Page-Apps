import React, { useEffect, useState } from "react";
import axios from 'axios';
import  { Link } from 'react-router-dom';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const CharacterList = props => {
	  const [Char, setChars] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          setChars(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getChars();
  }, []);

  return (
    <section className="character-list">
      {chars.map(char => (
        <CharDetails key = {char.id} char = {char} />
      ))}
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

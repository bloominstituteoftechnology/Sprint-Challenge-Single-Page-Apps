import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import styled from 'styled-components';



const CharacterListStyle = styled.div`
justify-content: space-evenly;
text-align: center;
justify-content: space-evenly;
`

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

    const [character, setcharacter] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      setcharacter (response.data.results)
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <CharacterListStyle>
      {character.map((item) =>
        <CharacterCard
          key={item.id}
          name={item.name}
          status={item.status}
          image={item.image}
          />
          )}
    </CharacterListStyle>
  );
}
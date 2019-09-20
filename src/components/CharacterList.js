import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

import CharacterCard from "./CharacterCard";


const CharacterListStyle = styled.div`
background-color: blue;
display: flex;
justify-content: center;
`


export default function CharacterList() {

  // TODO: Add useState to track data from useEffect

  const [Personnage, setPersonnage] = useState([]);
  
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response  => {
      setPersonnage(response.data.results)
  
      // console.log(response.data.results);
  
      }, [])
  
      .catch(error => {
          console.log("Error", error);
      })
    }, []);

  return (
    <CharacterListStyle>
    <section className="character-list">
      {Personnage.map((personnage) =>
        <CharacterCard
          name={personnage.name}
          status={personnage.status}
          />
          )}
    </section>
    </CharacterListStyle>
  );
}


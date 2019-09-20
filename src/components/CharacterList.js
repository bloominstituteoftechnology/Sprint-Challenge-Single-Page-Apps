import React, { useEffect, useState } from "react";
import axios from 'axios';
import styled from 'styled-components';

import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


const CharacterListStyle = styled.div`
background-color: blue;
display: flex;
justify-content: center;
`


export default function CharacterList() {

  // TODO: Add useState to track data from useEffect

  const [Personnage, setPersonnage] = useState([]);
  const [initialPersonnage, setInitialPersonnage] = useState([]);
  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
      axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response  => {
      setPersonnage(response.data.results)
      setInitialPersonnage(response.data.results)
      }, [])
  
      .catch(error => {
          console.log("Error", error);
      })
    }, []);

    const filterName = event => {
      let items = initialPersonnage;
      items = items.filter(
        item =>
        item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1
      );
      setPersonnage(items);
    }

  return (
    <CharacterListStyle>
    <SearchForm onSearch={filterName} />
    <section className="character-list">
      {Personnage.map((personnage) =>
        <CharacterCard
          key={personnage.id}
          name={personnage.name}
          status={personnage.status}
          image={personnage.image}
          />
          )}
    </section>
    </CharacterListStyle>
  );
}


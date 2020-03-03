import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
// import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import styled from 'styled-components';

let Section = styled.section`
box-sizing: border-box;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
width: 100%;
`;

let Card = styled.div`
width: 30%;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  let [characters, setCharacters] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    let getCharacters = () => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        // console.log(res)
        setCharacters(res.data.results)
      })
    }
    getCharacters();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  

  return (
    <>
      <SearchForm characters={characters}/>
    <Section className="character-list">
      {characters.map((char, id) => {
        return (
            <Card key={id} className='character-card'>
              <img style={{width: '100%'}} src={char.image}/>
              <h2>Name: {char.name}</h2>
            </Card>
        )
      })}
    </Section>
    </>
  );
}

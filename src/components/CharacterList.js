import React, { useEffect, useState } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import SearchForm from './SearchForm';
import CharacterCard from "./CharacterCard";

const CharacterList = props => {
   const List = styled.section`
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
   `;

   const Characters = styled.div`
     width: 90%;
     display: flex;
     flex-direction: column;
     flex-wrap: wrap;
     align-items: center;
     margin: 10px 5% 10px 5%;
     
   `;

   const [characters, setCharacters] = useState([]);

   const [searchedChar, setSearchChar] = useState([]);

   const search = characters => {
      setSearchChar(characters);
   };

   useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
         .then(response => {
            // console.log(response.data);
            setCharacters(response.data.results);
            setSearchChar(response.data.results);
         })
         .catch(error => {
            console.log(error);
         })
   }, []);

   return (
      <List>
         <Characters>
            <List>
               <h2>Characters</h2>
               <SearchForm {...props} search={search} characters={characters} />
               {searchedChar.map(character => {
                  return (
                     <CharacterCard {...props} character={character} />
                  )
               })}
            </List>
         </Characters>
      </List>
   )
};

export default CharacterList;


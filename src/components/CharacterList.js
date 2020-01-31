import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import SearchForm from './SearchForm';

const NavStyle = styled.nav `
display: flex;
justify-content: space-around;
align-items: center;
margin: 1%;
padding: 1%;
width: 200px;
border: 1px solid lightgrey;
`;

export default function CharacterList() {
  const [characterList, setCharacterList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const getCharacters = async () => {
    const { data } = await axios.get('https://rickandmortyapi.com/api/character/')
    const { results } = data;
    setCharacterList(results);
    setFilteredList(results);
  };

  const searchCharacters = (keyword) => {
    if (keyword) {
      setFilteredList(characterList.filter(item => item.name.includes(keyword)));
      return;
    }
    setFilteredList(characterList);
  };

  const onChangeKeyword = (keyword) => {
    searchCharacters(keyword);
  };


  useEffect(() => {
     getCharacters();
  }, []);

  return (
    <section className="character-list">
      <div>
        <NavStyle>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/character'>Character List</NavLink>
        </NavStyle>
        <SearchForm onChangeKeyword={onChangeKeyword} />
      </div>

      <h2>
        {filteredList.map(person => {
          return (
            <CharacterCard
              key={person.id}
              name={person.name}
              species={person.species}
              origin={person.origin}
              />
          );
        })}
      </h2>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchForm from "./SearchForm";

const Button = styled.button`
  margin: 10px;
  padding: 5px;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const CharacterList = () => {
  const [data, setData] =useState([]);

  


  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v1/cards").then(response => {
      console.log(response.data.cards);
      setData(response.data.cards);
    })
    .catch(error => {
      console.error("server error", error);
    })
  }, []);

  // useEffect( () => {
  //   setFilteredPoke(data.filter(character => character.name.toLowerCase().includes(query.toLowerCase)))
  // }, [query, data],
  // );
  
  // const handleInputChange = (event) => {
  //   setQuery
  // }

  return (
    <>
      {data.map(char => {
        return ( 
          <div>
            <SearchForm/>
            <CharacterCard
            key = {char.id}
            name = {char.name}
            hp = {char.hp}
            url = {char.imageUrl}
            />
            <Link to ="/">
          <Button>Return Home</Button>
          </Link>
          </div>
        )
        })} 
      
    </>
  );
}

export default CharacterList;

import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function CharacterList(props) {

  const StyledDiv = styled.div `
    background: lightgrey;
    width: 29%;
    display: flex;
    margin: 0 auto;
    border-radius: 15px;
    justify-content: space-around;
  `

  return (
    <StyledDiv>  
      <Link to='/'>Home</Link>
      {props.characters.map((character, i) => {
        return (
        <div value={character.name} key={i}>
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name}/>
        </div>
        )
      })
      }
    </StyledDiv>
  )
}

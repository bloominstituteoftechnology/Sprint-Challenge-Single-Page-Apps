import React from "react";
import styled from 'styled-components';
// import CharacterList from './components/CharacterList';

function CharacterCard (props) {
  const { name, image }=props.character;
  // const { images } =props.character;
    
  
  return (
    <>
    <img src={image} alt={name} />
    {/* <StyledImageCard>{image}</StyledImageCard> */}
    <StyledCharacterCard>Character: {name}</StyledCharacterCard>
    </>
    )
  }
  
export default CharacterCard
    
const StyledCharacterCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    margin-bottom: 20px;
    color: red;
      `;

// const StyledImageCard =styled.img`
//       justify-content: center;
//       width: 45%;
//       padding: 10px 20px;
//       margin: 0 auto;
//       border-radius: 5px;
//     `;
    
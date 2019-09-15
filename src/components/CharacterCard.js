import React from "react";
import styled from 'styled-components';
// import CharacterList from './components/CharacterList';

function CharacterCard (props) {
  const { name, image }=props.character;
    
  
  return (
    <>
    <img src={image} alt={name} />
    <StyledCharacterCard>Character:{name}</StyledCharacterCard>
    </>
    )
  }
  
export default CharacterCard
    
const StyledCharacterCard = styled.div`
    
    padding: 10px 10px;
    margin-bottom: 20px;
      `;

    //  const image =styled.img`
    //   justify - content: center;
    //   width: 45 %;
    //   padding: 10px 20px;
    //   margin: 0 auto;
    // `;
    
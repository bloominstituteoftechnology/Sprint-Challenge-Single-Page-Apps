import React from "react";
import styled from 'styled-components';



function CharacterCard (props) {
  const { name, image }=props.character;
   
  return (
    <>
    <Img src={image} alt={name} />
    <StyledCharacterCard>Character Name: {name} </StyledCharacterCard>
     </>
    )
  }
  
export default CharacterCard;

    
const StyledCharacterCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    margin-bottom: 20px;
    color: red;
    width: 22%;
      `;

const Img = styled.img`
      justify-content: center;
      width: 22%;
      padding: 10px 20px;
      margin: 0 auto;
      border-radius: 10px;
    `;
    

// <div>
//   <image style={{ borderRadius: "15px", padding: "15px", marginBottom: "15px" }} />
// </div>
// <StyledImageCard>{image} </StyledImageCard>
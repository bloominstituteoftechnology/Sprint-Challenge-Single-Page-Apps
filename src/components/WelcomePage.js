import React from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components"
import {lightSpeedIn } from 'react-animations';
import {fadeIn} from 'react-animations';
let bounceAnimation = keyframes`${lightSpeedIn}`;
let fadeAnimation = keyframes`${fadeIn}`;

const Fadediv = styled.div`
animation:10s ${fadeAnimation};
`;
const BouncyDiv = styled.h1`
  animation: 10s ${bounceAnimation};
  text-align: center;
color: blue;
font-size:55px
`;

const StyledLink = styled(Link)`
display:flex;
color: blue;
  font-weight: bold;
  
`;


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <BouncyDiv>Welcome to the ultimate fan site!</BouncyDiv>
        <StyledLink className='links' to={'/characters'}>Character </StyledLink>
        <StyledLink className='links' to={'/locations'}>Location </StyledLink>
        <StyledLink className='links' to={'/episodes'}>Episodes </StyledLink>
        <Fadediv><img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /></Fadediv>
        
      </header>
    </section>
  );
}

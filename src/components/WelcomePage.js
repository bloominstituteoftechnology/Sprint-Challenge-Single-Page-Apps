import React from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components"
import {lightSpeedIn } from 'react-animations';

let bounceAnimation = keyframes`${lightSpeedIn}`;

const BouncyDiv = styled.h1`
  animation: 20s ${bounceAnimation};
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
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
    </section>
  );
}

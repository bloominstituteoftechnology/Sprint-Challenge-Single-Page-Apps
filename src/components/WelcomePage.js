import React from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components"
import {lightSpeedIn } from 'react-animations';
import {fadeIn} from 'react-animations';
import Alert from './audio';

let bounceAnimation = keyframes`${lightSpeedIn}`;
let fadeAnimation = keyframes`${fadeIn}`;


const Fadediv = styled.div`
animation:3s ${fadeAnimation};
`;
const BouncyDiv = styled.h1`
  animation: 2s ${bounceAnimation};
  text-align: center;
color: blue;
font-size:55px
`;




export default function WelcomePage() {
  return (
    <section className="welcome-page">
    
    
   
     
   
      <header>
       <Alert>
    <audio ref="audio_tag" src="../assets/wubba_lubba_dub_dub.mp3" onLoadStart/>
    </Alert>
   </header>
        <BouncyDiv>Welcome to the ultimate fan site!</BouncyDiv>
        <div className='Nav'>
        <Link className='links' to={'/characters'}> Character </Link>
        <Link className='links' to={'/locations'}> Location </Link>
        <Link className='links' to={'/episodes'}> Episodes </Link>
        </div>
        <Fadediv><img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        /></Fadediv>
        
      
    </section>
  );
}

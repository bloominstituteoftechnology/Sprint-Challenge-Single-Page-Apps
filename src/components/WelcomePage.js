import React from "react";
import { Link } from "react-router-dom";
import styled, {keyframes} from "styled-components"
import {lightSpeedIn } from 'react-animations';
import {fadeIn} from 'react-animations';
import Alert from './audio';
import Gif from '../assets/portal.gif'

let bounceAnimation = keyframes`${lightSpeedIn}`;
let fadeAnimation = keyframes`${fadeIn}`;


const Fadediv = styled.div`
animation:5s ${fadeAnimation};
`;
const BouncyDiv = styled.h1`
  animation: 2s ${bounceAnimation};
  text-align: center;
  color:#349032
font-size:50px
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
        <Link className='links' to={'/characters'}> Characters </Link>
        
        </div>
        <Fadediv><img
          className="main-img"
          src={Gif}
          alt="rick"
        /></Fadediv>
        
      
    </section>
  );
}

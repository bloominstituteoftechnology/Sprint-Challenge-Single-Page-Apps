import React from "react";
import styled,  { keyframes } from 'styled-components';
import {rotateIn} from 'react-animations';
import {fadeIn } from 'react-animations';

let fadeAnimation = keyframes`${fadeIn}`;
let bounceAnimation = keyframes`${rotateIn}`;
const Card = styled.div`
animation:5s ${fadeAnimation}
 animation: 3s ${bounceAnimation};
 display:flex;
 flex-direction:column;
 align-items:center;
  width: 40%;
  border-radius: 8px;
  border: solid black 1px;
  padding: 1rem;
  background-color: lightgray;
  margin:0 auto;
  box-shadow: 10px 10px 8px #888888;

`;



const CharacterCard = props => {
  return (
    <div className ="grid-view">
   
      <Card>
      <img src={props.image} alt="character" />
        <h1>{props.name}</h1>
        <p>{props.status}</p>
        <p>{props.species}</p>
        <p>{props.gender}</p>
      </Card>
    </div>
  )
}
export default CharacterCard;
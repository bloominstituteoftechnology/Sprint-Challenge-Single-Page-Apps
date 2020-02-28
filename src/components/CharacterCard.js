import React from "react";
import styled from 'styled-components';
//import { Card } from 'react-bootstrap'

// export default function CharacterCard() {
//   return <span>todo: character</span>;
// }

const Card = styled.div`
background-color: lightcyan;
width: 25%;
margin: 0 auto;
`


const CharacterCard = props => {
  return (
    <Card>
    
      <h1>Character</h1>
      <h2>Name: {props.name}</h2>
      <h3>Species: {props.species}</h3>
    
    </Card>
  )
}

export default CharacterCard;

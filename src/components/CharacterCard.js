import React from "react";
import styled from 'styled-components';
import '../index.css'


const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: Teal;
  margin: 5% 20%;
  border: solid 5px black;`



export default function CharacterCard(props) {
  
  



  return (
    <Card>
      <h2>{props.name}</h2>
      <p>{props.species}</p>
      <p>{props.status}</p>
      <p>{props.location}</p>
      <p>{props.gender}</p>
    </Card>
  )
}

import React from "react";
import styled from 'styled-components';
import { Card } from 'semantic-ui-react';


const StyledCard = styled(Card) `
  font-size: 1.5rem;
  width: 30%;
`
export default function CharacterCard(props) {
  console.log(props)
  return(
  <StyledCard>
    <img src={props.image} />
    {props.name}
    <p style={{color: 'silver'}}>{props.status}</p>
    Location: {props.location.name}<br/>
    Origin: {props.origin.name}
  </StyledCard>
  )
}

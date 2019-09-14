import React from "react";
import { Card, Button } from 'semantic-ui-react';
import styled from'styled-components';

export default function LocationCard({ name, dimension, residents }) {

  const StyledCard = styled(Card) `
  font-size: 1.5rem;
  width: 30%;
`
  return(
    <StyledCard>
      <h2>{name}</h2> <br/>
      <p>{dimension}</p>
      <Button>Residents: {residents}</Button>
    </StyledCard>
  )
}

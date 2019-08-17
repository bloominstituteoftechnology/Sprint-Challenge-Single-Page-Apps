import React from "react";
import { Card } from 'semantic-ui-react';

export default function CharacterCard(props) {
  const char = props.character;
  return(
    <Card 
      image={char.image}
      header={char.name}
      meta={char.status}
    />
  )
}

import React from "react";
import { Card } from 'semantic-ui-react';
/* rendering UI using semantic card and icons */
export default function LocationCard(props) {
  return(
    <Card>
      <Card.Content>

      <Card.Header>{props.name}</Card.Header>
      
      <Card.Description>
          <span>  Planet: {props.type}  </span>
          <span>  Dimension: {props.dimension}  </span>
      </Card.Description>
      
      </Card.Content>
      
      <Card.Content extra>
        Residents: {props.residents.length}
      </Card.Content>
    </Card>
  );
};
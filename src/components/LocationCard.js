import React from "react";
import { Card } from 'semantic-ui-react';

// { name, type, dimension, residents }
export default function LocationCard(props) {
  return(
    <Card>
      <Card.Content>
        <Card.Header><h2>{props.location.name}</h2></Card.Header>
        <Card.Meta>
          Type: {props.location.type}
        </Card.Meta>
        <Card.Meta>
          Dimension: {props.location.dimension}
        </Card.Meta>
        <Card.Meta extra>
          {props.location.residents.length} Residents
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

import React from 'react'
import {Card} from "semantic-ui-react";

export default function LocationCard(props) {
  const {name, type, dimension, residents} = props.location;

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <div className="date">
            {type}
          </div>
          <div className="date">
          {dimension}
          </div>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        {residents.length} residents
      </Card.Content>
    </Card>
  )
}



  



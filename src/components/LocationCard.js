import React from "react";
import { Card } from "semantic-ui-react";

export default function LocationCard(props) {
  return (
    <div className='grid-view'>
       <Card>
        <Card.Content header={props.location.name} />
        <Card.Content description={props.location.type} />
        <Card.Content extra>
          <Card.Content description={props.location.residents.length + ' Residents'} />
        </Card.Content>
      </Card>
    </div>
   
  );
}

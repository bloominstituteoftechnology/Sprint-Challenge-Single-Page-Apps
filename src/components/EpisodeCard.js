import React from "react";
import { Card } from 'semantic-ui-react';
/* rendering UI using semantic card render */
export default function EpisodeCard(props) {
  return(
    <Card>
      <Card.Content>

      <Card.Header>{props.name}</Card.Header>
      
      <Card.Description>
          <span>  {props.episode}  </span>
      </Card.Description>
      
      </Card.Content>
      
      <Card.Content extra>
        {props.created}
      </Card.Content>
    </Card>
  );
};
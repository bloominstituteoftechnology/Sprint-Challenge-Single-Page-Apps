import React from "react";
import { Card } from "semantic-ui-react";

export default function EpisodeCard(props) {
    // console.log(props)
  return (
    <div className='grid-view'>
        <Card>
            <Card.Content header={props.episode.name} />
            <Card.Content description={props.episode.name} />
            <Card.Content extra>
                <Card.Content description={props.episode.episode} />
            </Card.Content>
        </Card>
    </div> 
  );
}

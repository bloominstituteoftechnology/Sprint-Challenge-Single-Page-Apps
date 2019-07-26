import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard (props) {
//   console.log(props.id)

  return (
    <div>
        <Card.Group>
             <Card>
                <Card.Content>
                    <Card.Header content={props.name} />
                    <Card.Meta content={props.episode} />
                    <Card.Description content={props.air_date}/>
                </Card.Content>
            </Card>
        </Card.Group>
    </div>
  );
}


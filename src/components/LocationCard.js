import React from 'react'
import { Card } from 'semantic-ui-react'

export default function LocationCard (props) {
  return (
    <div>
        <Card.Group>
             <Card>
                <Card.Content>
                    <Card.Header content={props.name} />
                    <Card.Meta content={props.dimension} />
                    <Card.Description content={props.type}/>
                </Card.Content>
            </Card>
        </Card.Group>
    </div>
  );

}

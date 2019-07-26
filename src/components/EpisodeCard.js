import React from 'react'
import { Card, Image, Dimmer, Loader, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
export default function CharacterCard({ data }) {
    if (data) {
        return (
            <Segment>

                <Card>
                    <Card.Content>
                        <Card.Header>
                            {data.name}
                        </Card.Header>
                        <Card.Meta>
                            {data.air_date}
                        </Card.Meta>
                        <Card.Meta>
                            {data.episode}
                        </Card.Meta>
                        <Card.Description>
                            Residents: {data.characters.length}
                        </Card.Description>
                    </Card.Content>
                </Card></Segment>)
    }
    else {
        return (<Dimmer active>
            <Loader>Loading</Loader>
        </Dimmer>)
    }

}
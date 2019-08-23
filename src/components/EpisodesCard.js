import React from 'react';
import { Card, CardDescription } from 'semantic-ui-react';

export default function EpisodesCard({epis}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{epis.name}</Card.Header>
                <Card.Meta>{epis.air_data}</Card.Meta>
                <CardDescription> {epis.id} </CardDescription>
            </Card.Content>
        </Card>
    )
}
import React from 'react';
import { Card, CardDescription } from 'semantic-ui-react';

export default function EpisodesCard({epi}) {
    return (
        <Card>
            <Card.Content>
                <Card.Header>{epi.name}</Card.Header>
                <Card.Meta>{epi.air_data}</Card.Meta>
                <CardDescription> {epi.id} </CardDescription>
            </Card.Content>
        </Card>
    )
}
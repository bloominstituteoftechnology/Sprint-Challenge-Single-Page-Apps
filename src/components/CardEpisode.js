import React from 'react'

import { Card, Icon } from 'semantic-ui-react'

export default function EpisodeCard({ episode }) {

    return (
        <Card>
            <Card.Content header={episode.name} />
            <Card.Content description={episode.air_date} />
            <Card.Content description={episode.episode} />
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {episode.characters.length} Characters
                </a>
            </Card.Content>
        </Card>
    )
}
import React from 'react';
import { Card } from 'semantic-ui-react'




export default function EpisodeCard (props) {

    return(

        <Card>
            <h3> {props.name} </h3>
            <h4>Episode: {props.number} </h4>
            <p>Date Aired: {props.airDate} </p>

        </Card>
            
    )
}

import React from 'react';
import { Card } from 'semantic-ui-react';

export default function EpisodeCard (props) {
    return (
        // <span className='episode-card'>
        //    <h3>{props.name}</h3>
        //     <h4>Episode number: {props.number}</h4>
        //       <p>Air Date: {props.airDate}</p>
        //    </span>
        <Card className='episode-card'
        header={props.name}
        meta={props.number}
        description={props.airDate} />
          );
        }
        
       
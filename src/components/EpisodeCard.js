import React from 'react';




export default function EpisodeCard (props) {

    return(
        
        <div>
            <h3> {props.name} </h3>
            <h4>Episode: {props.number} </h4>
            <p>Date Aired: {props.AirDate} </p>
            </div>
            
    )
}

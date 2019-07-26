import React from 'react';

export default function EpisodeCard (props) {
    return (
        <span className="episode-card">
            <h2>{props.name}</h2>
            <h3>Episode number: {props.number}</h3>
            <p>Air Date: {props.airDate}</p>
        </span>
    );
}
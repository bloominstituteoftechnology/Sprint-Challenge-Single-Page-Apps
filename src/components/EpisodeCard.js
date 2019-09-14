import React from "react";
// import EpisodeList from './components/EpisodeList';
import { NavLink } from 'react-router-dom';

function EpisodeCard (props) {
     const { episode, air_date, name }=props.episode;    
    
    return (

        <div>
            <h4>Name: {name}</h4>
            <h4>Air Date: {air_date}</h4>
            <h4>Episode: {episode}</h4>
        </div>
    )
}

export default EpisodeCard;

// ${episode.id + 1}`}>Next Episode
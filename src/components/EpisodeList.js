import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from "./EpisodeCard.js"
/* rendering UI using semantic card and menu tabs from tabnav and set state to response.data.results */
export default function EpisodeList(props) {
    const [episodes, setEpisode] = useState([])
    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
            console.log(response.data.results)
            setEpisode(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])
/* return div with mapped episodes rendered to client route page through card function */

    return (
        <div className="episode-list grid-view">

        {episodes.map(episode => 
            <EpisodeCard
            name={episode.name}
            episode={episode.episode}
            created={episode.created}
            key={episode.id}
            />
        )}
        </div>
    );
};
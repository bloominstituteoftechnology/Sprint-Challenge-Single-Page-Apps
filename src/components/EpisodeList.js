import React, {useEffect, useState} from "react";
import axios from 'axios';

import EpisodeCard from "./EpisodeCard"; 

export default function EpisodeList() {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
            console.log(res.data)
            setEpisodes(res.data.results);
        })
        .catch( err => {
            console.log(err);
        });
    }, []);
    
    return(
        <section className="episodes-list grid-view">
            {episodes.map(episode => (
                <EpisodeCard key={episode.id} episode={episode} />
            ))}
        </section>
    )

}
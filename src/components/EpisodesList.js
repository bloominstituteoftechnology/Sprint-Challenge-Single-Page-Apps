import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard';
import axios from 'axios';

export default function EpisodeList() {
    const [ episodes, setEpisodes ] = useState([]);

    useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
        .then((res) => {
        setEpisodes(res.data.results);
        })
    }, []);

    console.log(episodes);
    return (
    <section className="episodes-list grid-view">
        {episodes.map((epi) => {
            return (
                <EpisodeCard 
                key={epi.id}
                name={epi.name}
                episode={epi.episode}
                date={epi.air_date} 
                />
            )
        })}
    </section>
    );
}
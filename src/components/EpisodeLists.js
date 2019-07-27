import React, { useEffect, useState } from "react";

import axios from 'axios'

import EpisodeCard from './EpisodeCard'

export default function LocationsList() {
    const [episodeList, setEpisodeList] = useState(null);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/episode/")
            .then(response => {
                setEpisodeList(response.data.results);
                console.log(response.data.results);
            });
    }, []);

    if (!episodeList) {
        return (
            <div>
                <h1>Loading Episode List...</h1>
            </div>
        );
    }

    return (
        <section className="character-list grid-view">
            {episodeList.map((episode, i) => (
                <EpisodeCard
                key={i} 
                episode={episode}
                />
            ))}
        </section>
    );
}
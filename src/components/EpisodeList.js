import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

 function EpisodeList () {
    const [episodeList, setEpisodeList] = useState([])
 
    useEffect(() => {
      
        const getEpisodeList = () => {
            axios
                .get("https://rickandmortyapi.com/api/episode")
                .then(response => {
                    setEpisodeList(response.data.results);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }

        getEpisodeList();
    }, []);


    return (
        <section className="episode-list grid-view">
            {episodeList.map(episode => (
                <EpisodeCard key={episode.name} episode={episode} />
            ))}
        </section>
    );
}

export default EpisodeList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function EpisodesList(props) {
    const [episodes, setEpisodes ] = useState([]);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/episode/`)
            .then(res => {
                console.log('Yahtzee!', res.data.results);
                setEpisodes(res.data.results)
            })
            .catch(error => {
                console.error('No Go!', error)
            })
    },[]);

    return(
        <section className='episode-list grid-view'>
            {episodes.map(episode => (
              <EpisodeCard 
              key={episode.id}
              episode={episode}
              name={episode.name}
              airDate={episode.air_date}
              number={episode.id} />
            ))}
        </section>
    );
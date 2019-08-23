import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function EpisodeList(props) {
    console.log(props);
    const [episodes, setEpisode] = useState([])
    const id = 
    useEffect(() => {
        const getEpisode = () => {
            axios
                .get('https://rickandmortyapi.com/api/episode/')
                .then(res => {
                    console.log(res);
                    setEpisode(res.data.results);
                })
                .catch(error => {
                    console.error('Server Error', error);
                });
        }
        getEpisode();        
    }, []);
    
    return (
        <div className='episode-list'>
            {episodes.map(episode => (
                <EpisodeDetails key={id} episode={episode} />
            ))}
        </div>
    );
}

function EpisodeDetails({episode}){
    return (
        <div className='episode-card'>
            <h1>{episode.name}</h1>
            <p>{episode.air_date}</p>
            <p>{episode.episode}</p>
        </div>
    )
}
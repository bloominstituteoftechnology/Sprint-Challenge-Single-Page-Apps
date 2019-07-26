import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';

export default function EpisodeList(props) {

    const [episode, setEpisode] = useState([]);

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/episode?page=2')
        .then(res => {
            console.log('working', res.data.results);

            setEpisode(res.data.results);
        })

        .catch(err => console.log(err));
    },[]);




    return (

        <div>
            {episode.map(episodes => (
                <EpisodeCard

                episode={episode}
                name={episode.name}
                number={episode.id}
                airDate={episode.air_date}
                
                
                />
            ))}
        </div>
    )
}
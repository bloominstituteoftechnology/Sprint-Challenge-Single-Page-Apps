import React, {useState, useEffect} from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard.js';
import { Card } from 'semantic-ui-react'

export default function EpisodeList(props) {

    const [episode, setEpisode] = useState([]);

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
            console.log('working', res.data.results);

            setEpisode(res.data.results);
        })

        .catch(err => console.log(err));
    },[]);




    return (

        <Card.Group>
            {episode.map(episode => (
                <EpisodeCard

                episode={episode}
                name={episode.name}
                number={episode.id}
                airDate={episode.air_date}
                
                
                />
            ))}
        </Card.Group>
    )
}
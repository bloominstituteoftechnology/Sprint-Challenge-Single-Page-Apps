import axios from  'axios';
import react, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard.js';

const EpisodeList = () => {
    const [episode, setEpisode] = useState([]);

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/episode/`)
        .then(res => {
            setEpisode(res.data.results);
        })
        .catch(error => {
            console.log(error);
        });
    });
}, [];
import axios from  'axios';
import React, { useEffect, useState } from 'react';
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
    }, []);

    return (
        <section>
          {episode.map(props => {
            return (
              <EpisodeCard
                key = {props.id}
                name = {props.name}
                air = {props.air_date}
                episode = {props.episode}
              />
            );
          })}
        </section>
      );
}

export default EpisodeList;
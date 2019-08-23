import React, { useState, useEffect } from 'react'
import axios from 'axios';
import EpisodesCard from './EpisodesCard';

export default function EpisodesList() {
    const [episode, setEpisodes] = useState([])

  useEffect(() => {
      axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
          console.log('episode data:', res.data.results);
          setEpisodes(res.data.results);
      })
      .catch(err => {
          console.error(err);
    }); 
}, []);

return ( 
    <section className='episode-list grid-view'>
        {episode.map(epi  => {
            return <EpisodesCard key={epi.id} epi={epi} />;
        })}
    </section>
)


}
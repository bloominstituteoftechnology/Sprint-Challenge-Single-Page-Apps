import React, { useEffect, useState } from 'react';
import EpisodeCard from './EpisodeCard'
import axios from 'axios';

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodes, setEpisodes] = useState([]);
  // TODO: Add AJAX/API Request here - must run in `useEffect`
  //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(results => {
        console.log('results', results.data.results)
        setEpisodes(results.data.results)
      })
  }, [])

  return <section className='character-list grid-view'>
      { episodes.map(episode => {
        return <EpisodeCard key={episode.id} {...episode} />;
      })}
    </section>

}

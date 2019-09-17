import React, { useEffect, useState } from "react";
import axios from 'axios'
import EpisodeCard from './EpisodeCard.js'

export default function EpisodeList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/episode/')
        .then(res => {
          setEpisodes([...res.data.results]);
        })
        .catch(error => {
          console.log('error',error)
        })
  }, []);
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


  return (
    <section className="episode-list grid-view">
      {episodes.map(episode => (
        <EpisodeCard key={episode.id} episodes={episode}/>
      ))}
    </section>
  );
}

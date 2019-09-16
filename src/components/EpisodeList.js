import React, { useEffect, useState } from 'react';
import axios from 'axios';

const EpisodeList = () => {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(resesp => {
        setEpisodes(resesp.data.results)
      })
      .catch(error => {
        console.log('Episode Error', error)
      })
  }, [])
  return (
    <section className='episode-list'>
      {episodes.map(episode => (
        <div className='episode' key={episode.id}>
          <h2>{episode.name}</h2>
          <p>{episode.air_date} {episode.episode}</p>
        </div>
      ))}
    </section>
  );
}

export default EpisodeList;